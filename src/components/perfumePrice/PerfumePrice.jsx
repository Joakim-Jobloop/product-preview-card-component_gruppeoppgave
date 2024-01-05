import "./PerfumePrice.css";

export const PerfumePrice = () => {
  return (
    <div className="flex items-center gap-8 price_wrapper">
      <p className="text-4xl new_price font-fraunces text-design-darkcyan">$149.99</p>
      <p className="text-sm line-through old_price text-design-darkgrayblue">$169.99</p>
    </div>
  );
};
