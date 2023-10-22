import useSort from './useSort';

const App = () => {
  const { inputVisible, onClickGo, inputRef, numbers } = useSort();

  return (
    <div className='flex flex-col items-center gap-4'>
      <h1 className='text-4xl font-bold py-4'>Sorting Visualizer</h1>
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
        <div className='flex gap-1 place-items-end'>
          {numbers.map((number, index) => (
            <div
              key={index}
              style={{ height: number * 5 }}
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
