
const assetModules = import.meta.glob('../assets/**/*', { eager: true, import: 'default' });


export function resolveAsset(assetPath, fallback = '') {
  if (!assetPath || typeof assetPath !== 'string') {
    return fallback || getDefaultPlaceholder('Asset');
  }


  if (
    assetPath.startsWith('http://') ||
    assetPath.startsWith('https://') ||
    assetPath.startsWith('data:') ||
    assetPath.startsWith('/')
  ) {
    return assetPath;
  }

 
  const normalized = assetPath.replace(/\\/g, '/').trim();
  const fileName = normalized.split('/').pop().toLowerCase();


  for (const [path, url] of Object.entries(assetModules)) {
    const normalizedModulePath = path.replace(/\\/g, '/');
    if (normalizedModulePath.toLowerCase().endsWith(normalized.toLowerCase())) {
      return url;
    }
  }

  
  for (const [path, url] of Object.entries(assetModules)) {
    const moduleFileName = path.split('/').pop().toLowerCase();
    if (moduleFileName === fileName) {
      return url;
    }
  }


  return fallback || getDefaultPlaceholder(fileName.split('.')[0] || 'Project');
}


export function getDefaultPlaceholder(label = 'Project') {
  const safeLabel = encodeURIComponent(label.slice(0, 24));
  return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="380" viewBox="0 0 600 380"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%230f172a"/><stop offset="50%" stop-color="%231e293b"/><stop offset="100%" stop-color="%230284c7"/></linearGradient></defs><rect width="600" height="380" fill="url(%23g)"/><circle cx="300" cy="160" r="45" fill="none" stroke="%2338bdf8" stroke-width="2.5" opacity="0.6"/><path d="M280 160h40M300 140v40" stroke="%2338bdf8" stroke-width="2.5" stroke-linecap="round"/><text x="300" y="240" fill="%23e2e8f0" font-family="system-ui,sans-serif" font-size="20" font-weight="600" text-anchor="middle">${safeLabel}</text><text x="300" y="268" fill="%2394a3b8" font-family="system-ui,sans-serif" font-size="13" text-anchor="middle">Tech Showcase</text></svg>`;
}

export default resolveAsset;
