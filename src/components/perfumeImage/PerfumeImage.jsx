import BGDESKTOP from "/image-product-desktop.jpg";
import BGMOBILE from "/image-product-mobile.jpg";
import "./PerfumeImage.css";

export const PerfumeImage = () => {
  return (
    <figure className="img_wrapper">
    <img src={BGDESKTOP} alt="" className="desktop_image" />
    <img src={BGMOBILE} alt="" className="mobile_image" />
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



