import { useRef, useState } from 'react';

const useSort = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputVisible, setInputVisible] = useState(true);
  const [numbers, setNumbers] = useState<Array<number>>([]);

  const onClickGo = () => {
    const input = inputRef.current;
    if (!input) return;
    const numArr = input.value
      ?.split(' ')
      .reduce<Array<number>>((acc, numStr) => {
        if (numStr === '') return acc;
        const number = parseInt(numStr);
        return isNaN(number) ? acc : [...acc, number];
      }, []);
    setNumbers(numArr || []);
    setInputVisible(false);
  };

  return {
    numbers,
    inputRef,
    onClickGo,
    inputVisible,
  };
};

export default useSort;
