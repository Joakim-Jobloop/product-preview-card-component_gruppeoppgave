import "./PerfumeButton.css";
import CARTICON from "/icon-cart.svg"

export const PerfumeButton = () => {
  return (
    <div className="btn_wrapper">
      <button className="flex items-center justify-center w-full gap-3 py-3 text-white rounded-lg btn_cart bg-design-darkcyan">
        <img src="/icon-cart.svg" alt="cart icon" className="cart_icon" />
        <p className="font-bold">Add to Cart</p>
        
      </button>
    </div>
  );
};
