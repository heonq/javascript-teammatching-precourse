const Store = {
  setItem(key, item) {
    localStorage.setItem(key, JSON.stringify(item));
  },

  getItem(key) {
    return JSON.parse(localStorage.getItem(key));
  },
};

export default Store;
