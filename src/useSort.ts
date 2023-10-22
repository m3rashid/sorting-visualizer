import { useRef, useState } from 'react';
import { SortingAlgorithm } from './algorithms';

const useSort = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputVisible, setInputVisible] = useState(true);
  const [numbers, setNumbers] = useState<Array<number>>([]);
  const [normalizationFactor, setNormalizationFactor] = useState<number>(0);
  const [algorithm, setAlgorithm] = useState<SortingAlgorithm>('');

  const bubbleSort = () => {
    const sort = () =>
      setNumbers((numbers) => {
        // check if the numbers array is sorted
        let sorted = true;
        for (let i = 0; i < numbers.length - 1; i++) {
          if (numbers[i] > numbers[i + 1]) {
            sorted = false;
            break;
          }
        }
        if (sorted) return numbers;
        // TODO
        // TODO
        // TODO
        // TODO
        // TODO

        return [];
      });

    // sort the numbers array one pass at a time
    setTimeout(() => {}, 200);
  };

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
    setNormalizationFactor(500 / (Math.max(...numArr) - Math.min(...numArr)));
    setNumbers(numArr || []);
    setInputVisible(false);
  };

  const onAlgorithmChange = (algorithm: SortingAlgorithm) => {
    setAlgorithm(algorithm);
  };

  const onReset = () => {
    setAlgorithm('');
    setInputVisible(true);
    setNumbers([]);
  };

  const onStartSort = () => {
    if (!algorithm) return;
    bubbleSort();
    // const sortFunction = sortingAlgorithms[algorithm];
    // sortFunction(numbers, setNumbers);
  };

  return {
    numbers,
    inputRef,
    onClickGo,
    inputVisible,
    normalizationFactor,
    algorithm,
    onReset,
    onStartSort,
    onAlgorithmChange,
  };
};

export default useSort;
