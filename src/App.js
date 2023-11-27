import { CCalculator } from "./compnents/CCalculator";

const App = function () {
  return (
    <>
      <div
        className={
          "container-page w-full h-screen flex justify-center " +
          "items-center bg-gradient-to-r from-indigo-500 " +
            "via-purple-500 to-pink-500"
        }
      >
        <CCalculator />
      </div>
    </>
  );
};
export default App;
