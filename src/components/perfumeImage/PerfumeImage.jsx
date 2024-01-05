import BGDESKTOP from "/image-product-desktop.jpg";
import BGMOBILE from "/image-product-mobile.jpg";
import "./PerfumeImage.css";

export const PerfumeImage = () => {
  return (
    <figure className="w-full h-full img_wrapper">
      <img
        src={BGDESKTOP}
        alt=""
        className="hidden object-cover w-full h-full rounded-l-xl sm:block"
      />
      <img
        src={BGMOBILE}
        alt=""
        className="block object-cover w-full h-full mobile_image sm:hidden rounded-t-xl"
      />
    </figure>
  );
};

//! Fiks for Sindre:
// import { useState, useEffect } from 'react';
// import BGDESKTOP from "/image-product-desktop.jpg"
// import BGMOBILE from "/image-product-mobile.jpg"
// import './PerfumeImage.css'

// export const PerfumeImage = () => {
//   const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 375px)").matches);

//   useEffect(() => {
//     const mediaQuery = window.matchMedia("(max-width: 375px)");

//     const handleResize = () => {
//       setIsMobile(mediaQuery.matches);
//     };

//     mediaQuery.addEventListener("change",handleResize);

//     // Cleanup the listener when the component unmounts
//     return () => {
//       mediaQuery.removeEventListener("change",handleResize);
//     };
//   }, []);

//   return (
//     <picture className="img_wrapper">
//       {isMobile ? (
//         <img src={BGMOBILE} alt="" className="mobile_image" />
//       ) : (
//         <img src={BGDESKTOP} alt="" className="desktop_image" />
//       )}
//     </picture>
//   );
// };
