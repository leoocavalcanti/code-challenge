import { useCallback, Dispatch, SetStateAction } from 'react';

const useSideEffects = <T>(setState: Dispatch<SetStateAction<T[]>>) => {
  const create = useCallback(
    (state: T) => {
      setState(() => [state]);
    },
    [setState]
  );

  const appendList = useCallback(
    (list: T[]) => {
      setState(oldState => [...oldState, ...list]);
    },
    [setState]
  );

  const replaceList = useCallback(
    (list: T[]) => {
      setState(list);
    },
    [setState]
  );

  return {
    create,
    appendList,
    replaceList,
  };
};

export { useSideEffects };
