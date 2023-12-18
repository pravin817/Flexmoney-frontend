// import React, { useState, useEffect } from "react";
// import { HiMenu } from "react-icons/hi";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isSticky, setIsSticky] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 0) {
//         setIsSticky(true);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <header className="w-full fixed top-0 left-0 right-0">
//       <nav
//         className={`py-4 md:px-20 px-4 bg-orange-50 ${
//           isSticky ? "sticky top-0 right-0 left-0 bg-white " : ""
//         }`}
//       >
//         <div className="flex items-center justify-between">
//           <div className="text-white font-bold text-lg cursor-pointer">
//           <Link
//             to="/"
//           >Test</Link>
//             <h2 className="text-black">Yogo</h2>
//           </div>

//           {/* for larger device */}
//           {/* <div className="lg:flex items-center gap-3 hidden text-body">
//             <Link
//               to="/"
//               className="block text-primary hover:text-gray-400 py-2 px-4 cursor-pointer"
//             >
//               Home
//             </Link>

//             <Link
//               to="/admission"
//               className="block hover:text-gray-400 py-2 px-4 cursor-pointer"
//             >
//               Admission
//             </Link>
//             <Link
//               to="/getList"
//               className="block hover:text-gray-400 py-2 px-4 cursor-pointer"
//             >
//               Get Details
//             </Link>
//           </div> */}

//           {/* btn for small devices */}
//           <button onClick={toggleMenu} className="lg:hidden text-body text-3xl">
//             <HiMenu />
//           </button>
//         </div>

//         {/* Mobile menu */}
//         {isMenuOpen && (
//           {/* <div className="mt-4 bg-body p-4 rounded-lg text-white">
//             <Link to="/" className="block hover:text-gray-400 py-2">
//               Home
//             </Link>
//             <Link to="/admission" className="block hover:text-gray-400 py-2">
//               Admission
//             </Link>

//             <Link to="/getList" className="block hover:text-gray-400 py-2">
//               Get Details
//             </Link>
//           </div> */}
//         )}
//       </nav>
//     </header>
//   );
// };

// export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="w-full fixed top-0 left-0 right-0">
      <nav
        className={`py-4 md:px-20 px-4 bg-orange-50 
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-lg cursor-pointer">
            <Link to="/">Test</Link>
            <h2 className="text-black">Yogo</h2>
          </div>

          {/* for larger device */}
          {/* <div className="lg:flex items-center gap-3 hidden text-body">
            <Link
              to="/"
              className="block text-primary hover:text-gray-400 py-2 px-4 cursor-pointer"
            >
              Home
            </Link>

            <Link
              to="/admission"
              className="block hover:text-gray-400 py-2 px-4 cursor-pointer"
            >
              Admission
            </Link>
            <Link
              to="/getList"
              className="block hover:text-gray-400 py-2 px-4 cursor-pointer"
            >
              Get Details
            </Link>
          </div> */}

          {/* btn for small devices */}
          <button className="lg:hidden text-body text-3xl">
            {/* <HiMenu /> */}
            hello
          </button>
        </div>

        {/* Mobile menu */}
        {true &&
          {
            /* <div className="mt-4 bg-body p-4 rounded-lg text-white">
            <Link to="/" className="block hover:text-gray-400 py-2">
              Home
            </Link>
            <Link to="/admission" className="block hover:text-gray-400 py-2">
              Admission
            </Link>

            <Link to="/getList" className="block hover:text-gray-400 py-2">
              Get Details
            </Link>
          </div> */
          }}
      </nav>
    </header>
  );
};

export default Navbar;
