import { SortingAlgorithm, sortingAlgorithms } from './algorithms';
import useSort from './useSort';

const App = () => {
  const {
    inputVisible,
    onClickGo,
    inputRef,
    numbers,
    normalizationFactor,
    algorithm,
    onAlgorithmChange,
    onReset,
    onStartSort,
  } = useSort();

  return (
    <div className='flex flex-col items-center gap-4 px-4'>
      <div className='flex items-center justify-between w-full'>
        <h1 className='text-4xl font-bold py-4'>Sorting Visualizer</h1>

        {!inputVisible ? (
          <div className='flex items-center justify-center gap-2'>
            <select
              value={algorithm}
              onChange={(e) =>
                onAlgorithmChange(e.target.value as SortingAlgorithm)
              }
              className='rounded-md px-4 py-2 border-none outline-none'
            >
              <option value=''>Select Algorithm</option>
              {Object.keys(sortingAlgorithms).map((key) => (
                <option key={key} value={key}>
                  {key
                    .split('_')
                    .map((t) => t[0].toUpperCase() + t.slice(1))
                    .join(' ')}
                </option>
              ))}
            </select>

            <button
              onClick={onStartSort}
              className='px-6 py-2 bg-green-400 rounded-md text-white'
            >
              Start Sort
            </button>
            <button
              onClick={onReset}
              className='px-6 py-2 bg-red-400 rounded-md text-white'
            >
              Reset
            </button>
          </div>
        ) : null}
      </div>

      {inputVisible ? (
        <div className='flex flex-col items-center gap-2'>
          <label className='' htmlFor='arraySize'>
            Enter Array elements separated by spaces
          </label>
          <div className='flex items-center gap-2'>
            <input
              type='text'
              ref={inputRef}
              className='border-2 rounded-md p-2 w-96'
            />
            <button
              onClick={onClickGo}
              className='px-10 py-2 bg-green-400 rounded-md text-white'
            >
              Go
            </button>
          </div>
        </div>
      ) : (
        <div
          className='flex gap-1 place-items-end'
          style={{ height: 'calc(100vh - 100px)' }}
        >
          {numbers.map((number, index) => (
            <div
              key={index}
              style={{ height: number * normalizationFactor }}
              className='bg-green-400 w-10 text-white flex items-center justify-center rounded-md'
            >
              {number}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
