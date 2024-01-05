import "./App.css";
import { PerfumeButton } from "./components/perfumeButton/PerfumeButton";
import { PerfumeImage } from "./components/perfumeImage/PerfumeImage";
import { PerfumePrice } from "./components/perfumePrice/PerfumePrice";
import { PerfumeText } from "./components/perfumeText/PerfumeText";

function App() {
  return (
    <>
      <section className="flex flex-col items-center justify-center w-full h-screen px-4 py-12 bg-design-cream">
        <div className="grid sm:grid-cols-2 items-center justify-center sm:max-h-[600px] h-full max-w-[700px] w-[100%] grid-rows-[3fr_4fr] sm:grid-rows-none rounded-xl bg-white">
          <PerfumeImage />
          <div className="flex flex-col gap-4 p-6 content_wrapper">
            <PerfumeText />
            <PerfumePrice />
            <PerfumeButton />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
