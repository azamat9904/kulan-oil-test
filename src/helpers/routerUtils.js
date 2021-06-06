export const loadPage = page => () => import(`@/pages/${page}.vue`);

export const withNestedPage = parentDir => page => () => {
    return import(`@/pages/${parentDir}/${page}.vue`);
};
