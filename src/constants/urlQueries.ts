export const UrlQueries = {
    OATH_PROVIDER: 'provider',   // или 'oauth_provider' – как договорились с бэкендом
    // другие параметры, например:
    // PAGE: 'page',
    // SEARCH: 'q',
} as const; // as const делает значения readonly и литеральными типами