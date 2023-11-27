export function CErrorModal({closeHandler}) {
  return <>
    <div className="w-full inset-0 flex items-center justify-center mt-8 mx-auto">
      <div className="w-96 flex flex-col justify-center items-center p-4 rounded shadow bg-white">
        <p>An error occurred</p>
        <button
            onClick={closeHandler}
            className="mt-2 w-28 h-8 bg-blue-500 text-white px-4 rounded"
        >
          OK
        </button>
      </div>
    </div>
  </>;
}
