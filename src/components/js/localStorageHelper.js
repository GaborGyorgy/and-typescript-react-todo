export const getLocalStorageItem = (key, defaultValue = {}) => {
  return new Promise((resolve) => {
    const data = localStorage.getItem(key);
    const parsed =  data ? JSON.parse(data) : defaultValue;
    resolve(parsed);
  })
}

export const setLocalStorageItem = (key, data) => {
  return new Promise((resolve) => {
      localStorage.setItem(key, JSON.stringify(data));
      const retrievedData = getLocalStorageItem(key, null);
      resolve(!!retrievedData);
  })
}