export const viteConfig = {
  DEFAULT_URL: import.meta.env?.VITE_THEME_BASE_CDN_URL,
  DEFAULT_EXPIRATION: import.meta.env?.VITE_THEME_DEFAULT_CACHE_EXPIRATION,
  CACHE_KEY_PREFIX: import.meta.env?.VITE_THEME_CACHE_KEY_PREFIX,
  APP_URL: import.meta.env?.VITE_THEME_API_BASE_URL,
};
