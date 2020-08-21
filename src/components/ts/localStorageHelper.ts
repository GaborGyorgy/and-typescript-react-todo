import { ITask } from "./interfaces";

export const getLocalStorageItem = <T>(
  key: string,
  defaultValue: object = {}
): Promise<T> => {
  return new Promise((resolve) => {
    const data = localStorage.getItem(key);
    const parsed = data ? JSON.parse(data) : defaultValue;
    resolve(parsed);
  });
};

export const setLocalStorageItem = (
  key: string,
  data: ITask[]
): Promise<void> => {
  return new Promise((resolve) => {
    localStorage.setItem(key, JSON.stringify(data));
    resolve();
  });
};
