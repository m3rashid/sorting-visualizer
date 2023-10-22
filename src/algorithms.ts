type SortFunction = (
  arr: number[],
  setNumbers: React.Dispatch<React.SetStateAction<number[]>>
) => number[];

const bubbleSort: SortFunction = (arr, setNumbers) => {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      setTimeout(() => {
        if (arr[j] > arr[j + 1]) {
          // swap arr[j] and arr[j+1]
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }, 200);
    }
  }
  return arr;
};

export const sortingAlgorithms = {
  bubble_sort: bubbleSort,
  // selection_sort: () => [],
  // insertion_sort: () => [],
  // merge_sort: () => [],
  // quick_sort: () => [],
  // heap_sort: () => [],
} as const;

export type SortingAlgorithm = keyof typeof sortingAlgorithms | '';
