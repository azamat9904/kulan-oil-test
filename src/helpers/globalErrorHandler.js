export const errorHandler = (store) => (err) => {
    store.commit('setError', err);
}