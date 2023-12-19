export interface IBaseRepository<T> {
  appendList?: (data: T[]) => void;
  replaceList?: (data: T[]) => void;
  create?: (data: T) => void;
  append?: (data: T) => void;
}
