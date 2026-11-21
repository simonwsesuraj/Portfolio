
// ============================================
// 1. LOAD ASSETS FROM src/assets
// ============================================

// Vite automatically discovers supported assets
// inside src/assets and provides their URLs.
//
// Supported: PNG, JPG, JPEG, WEBP, AVIF,
// GIF, SVG, ICO and PDF.

const assetModules = import.meta.glob(
  "../assets/**/*.{png,jpg,jpeg,webp,avif,gif,svg,ico,pdf}",
  {
    eager: true,
    query: "?url",
    import: "default"
  }
);


// ============================================
// 2. NORMALIZE FILE PATHS
// ============================================

// Makes paths consistent across Windows and Linux.
//
// Example:
// projects\book.png -> projects/book.png

function normalizePath(path) {
  return path
    .replace(/\\/g, "/")
    .replace(/^\.\/+/, "")
    .replace(/^\/+/, "")
    .trim()
    .toLowerCase();
}


// ============================================
// 3. PREPARE ASSET LOOKUP
// ============================================

// Convert Vite asset paths into a simple lookup list.
//
// Example:
// ../assets/projects/book.png
// becomes:
// projects/book.png

const availableAssets = Object.entries(assetModules).map(
  ([path, url]) => {
    const normalizedPath = normalizePath(path).replace(
      /^(\.\.\/)?assets\//,
      ""
    );

    return {
      path: normalizedPath,
      fileName: normalizedPath.split("/").pop(),
      url
    };
  }
);


// ============================================
// 4. RESOLVE ASSET
// ============================================

export function resolveAsset(assetPath, fallback = "") {

  // Handle missing or invalid paths
  if (typeof assetPath !== "string" || !assetPath.trim()) {
    return fallback || getDefaultPlaceholder("Asset");
  }

  const requestedPath = assetPath.trim();

  // External URLs and public folder assets
  // do not need to be searched in src/assets.

  if (
    /^(https?:\/\/|data:|blob:)/i.test(requestedPath) ||
    requestedPath.startsWith("/")
  ) {
    return requestedPath;
  }

  // Normalize the requested path
  let normalizedPath = normalizePath(requestedPath);

  // Support paths such as:
  // assets/hero.png
  // ../assets/hero.png

  normalizedPath = normalizedPath.replace(
    /^(\.\.\/)?assets\//,
    ""
  );

  const requestedFileName = normalizedPath
    .split("/")
    .pop();


  // ------------------------------------------
  // First: Exact relative path matching
  // ------------------------------------------

  const exactMatch = availableAssets.find(
    (asset) => asset.path === normalizedPath
  );

  if (exactMatch) {
    return exactMatch.url;
  }


  // ------------------------------------------
  // Second: Unique filename matching
  // ------------------------------------------

  const fileNameMatches = availableAssets.filter(
    (asset) => asset.fileName === requestedFileName
  );

  // Return only when the filename is unique.
  // This prevents accidentally selecting the
  // wrong image when duplicate filenames exist.

  if (fileNameMatches.length === 1) {
    return fileNameMatches[0].url;
  }


  // ------------------------------------------
  // Third: Missing or ambiguous asset
  // ------------------------------------------

  if (fileNameMatches.length > 1 && import.meta.env.DEV) {
    console.warn(
      `[Asset Resolver] Multiple files found for "${assetPath}". Use the complete relative path.`
    );
  }

  if (import.meta.env.DEV && fileNameMatches.length === 0) {
    console.warn(
      `[Asset Resolver] Asset not found: "${assetPath}"`
    );
  }

  return fallback || getDefaultPlaceholder(
    requestedFileName.split(".")[0] || "Project"
  );
}


// ============================================
// 5. XML TEXT ESCAPING
// ============================================

// Prevent special characters from breaking SVG text.

function escapeXml(value) {
  return String(value).replace(/[<>&"']/g, (character) => {
    const entities = {
      "<": "&lt;",
      ">": "&gt;",
      "&": "&amp;",
      '"': "&quot;",
      "'": "&apos;"
    };

    return entities[character];
  });
}


// ============================================
// 6. DEFAULT PLACEHOLDER IMAGE
// ============================================

export function getDefaultPlaceholder(label = "Project") {

  const safeLabel = escapeXml(
    String(label).slice(0, 24)
  );

  const svg = `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="600"
      height="380"
      viewBox="0 0 600 380"
    >

      <defs>
        <linearGradient
          id="background"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stop-color="#0f172a" />
          <stop offset="50%" stop-color="#1e293b" />
          <stop offset="100%" stop-color="#0284c7" />
        </linearGradient>
      </defs>

      <rect
        width="600"
        height="380"
        fill="url(#background)"
      />

      <circle
        cx="300"
        cy="150"
        r="42"
        fill="none"
        stroke="#38bdf8"
        stroke-width="2.5"
        opacity="0.7"
      />

      <path
        d="M280 150h40M300 130v40"
        stroke="#38bdf8"
        stroke-width="2.5"
        stroke-linecap="round"
      />

      <text
        x="300"
        y="230"
        fill="#e2e8f0"
        font-family="Arial, sans-serif"
        font-size="21"
        font-weight="600"
        text-anchor="middle"
      >
        ${safeLabel}
      </text>

      <text
        x="300"
        y="260"
        fill="#94a3b8"
        font-family="Arial, sans-serif"
        font-size="13"
        text-anchor="middle"
      >
        Tech Showcase
      </text>

    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}


// ============================================
// 7. DEFAULT EXPORT
// ============================================

export default resolveAsset;
