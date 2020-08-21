export const getLocalStorageItem = (key, defaultValue = {}) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : defaultValue;
}

export const setLocalStorageItem = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
}