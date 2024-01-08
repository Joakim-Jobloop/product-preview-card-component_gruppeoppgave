import "./PerfumeText.css";

export const PerfumeText = () => {
  return (
    <>
      <div className="flex flex-col gap-4 sm:gap-8 text_wrapper">
        <h2 className="tracking-[0.3em] sm:tracking-[0.4em] sm:text-base font-extralight text-sm text-[13px] title text-design-darkgrayblue font-montserrat">
          PERFUME
        </h2>
        <h3 className="text-3xl text-[32px] sm:text-[40px] description font-fraunces text-design-darkblue">
          Gabrielle Essence Eau De Parfum
        </h3>
        <p className="text-[16px] leading-6 text title text-design-darkgrayblue font-montserrat">
          A floral, solar and voluptuous interpretation composed by Oliver
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
      </div>
    </>
  );
};
