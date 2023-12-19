type DebouncedFunction<T extends (...args: any[]) => void> = (
  ...args: Parameters<T>
) => void;

export const debounceEvent = <T extends (...args: any[]) => void>(
  func: T,
  wait = 1000
): DebouncedFunction<T> => {
  let time: ReturnType<typeof setTimeout> | null;
  return (...args: Parameters<T>) => {
    if (time) {
      clearTimeout(time);
    }
    time = setTimeout(() => func(...args), wait);
  };
};
