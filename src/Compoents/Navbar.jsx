// import { NavLink } from "react-router-dom";
// import useAuth from "../hook/useAuth";

// const Navbar = () => {
//   const { user, logOut } = useAuth();

//   const navLinks = (
//     <ul className="menu-horizontal flex items-center space-x-2">
//       <li>
//         <NavLink
//           to="/"
//           className={({ isActive }) =>
//             isActive
//               ? "text-blue-400 font-bold transition-all duration-200"
//               : "text-white/90 font-bold hover:text-blue-300 transition-all duration-200"
//           }
//         >
//           <span className="p-2 text-lg font-bold">Home</span>
//         </NavLink>
//       </li>

//       <li>
//         <NavLink
//           to="/dashboard"
//           className={({ isActive }) =>
//             isActive
//               ? "text-emerald-400 font-bold transition-all duration-200"
//               : "text-white/90 font-bold hover:text-emerald-300 transition-all duration-200"
//           }
//         >
//           <span className="p-2 text-lg font-bold">Dashboard</span>
//         </NavLink>
//       </li>

//       <li>
//         <NavLink
//           to="/allProperties"
//           className={({ isActive }) =>
//             isActive
//               ? "text-blue-400 font-bold transition-all duration-200"
//               : "text-white/90 font-bold hover:text-blue-300 transition-all duration-200"
//           }
//         >
//           <span className="p-2 text-lg font-bold">All Properties</span>
//         </NavLink>
//       </li>

//       {!user && (
//         <li>
//           <NavLink to="/login">
//             <span className="p-1 text-lg font-bold text-white/90 hover:text-blue-300 transition-all duration-200">
//               Login
//             </span>
//           </NavLink>
//         </li>
//       )}
//     </ul>
//   );

//   return (
//     <nav
//       className="fixed top-4 left-1/2 -translate-x-1/2 z-50
//       w-[95%] max-w-screen 
//       flex items-center justify-between gap-4
//       px-6 py-6 rounded-full border
//       bg-[rgba(0,0,0,0.26)] backdrop-blur-[6px]
//       shadow-[0_8px_32px_rgba(31,38,135,0.37)]
//       hover:shadow-[0_0_50px_rgba(50,130,184,0.45)]
//       transition-all duration-300 ease-in-out "
//     >
//       {/* Logo Section */}
//       <NavLink to="/" className="flex items-center gap-3 shrink-0">
//         <img
//           className="h-12 w-12 rounded-full border-4 border-white/40 backdrop-blur-sm"
//           src="https://i.ibb.co/CVjTYfB/Screenshot-2024-06-01-123321.png"
//           alt="logo"
//         />
//         <span className="font-bold text-4xl text-white/90 tracking-wide drop-shadow-[0_1px_2px_rgba(255,255,255,0.25)]">
//           EstateElite
//         </span>
//       </NavLink>

//       {/* Nav Links */}
//       <div className="hidden lg:flex items-center justify-center">{navLinks}</div>

//       {/* Mobile Dropdown */}
//       <div className="dropdown lg:hidden">
//         <div tabIndex={0} role="button" className="btn btn-ghost">
//           <i className="fa-solid fa-bars text-xl text-white"></i>
//         </div>
//         <ul
//           tabIndex={0}
//           className="menu menu-sm dropdown-content right-0 mt-3 z-50 shadow-lg
//           bg-[rgba(15,25,35,0.75)] text-white/90 rounded-xl w-52 
//           border border-white/10 backdrop-blur-md"
//         >
//           {navLinks}
//         </ul>
//       </div>

//       {/* User Avatar */}
//       {user && (
//         <div className="dropdown dropdown-end shrink-0">
//           <div
//             tabIndex={0}
//             role="button"
//             className="btn btn-ghost btn-circle avatar focus:outline-none"
//           >
//             <div
//               title={user?.displayName}
//               className="w-10 h-10 rounded-full border-2 border-transparent hover:border-blue-300/70 transition-all duration-300"
//             >
//               <img
//                 referrerPolicy="no-referrer"
//                 alt="User"
//                 src={user?.photoURL}
//                 className="w-full h-full object-cover rounded-full"
//               />
//             </div>
//           </div>

//           <ul
//             tabIndex={0}
//             className="dropdown-content p-1 shadow-lg backdrop-blur-xl 
//             bg-[rgba(25,35,45,0.8)] text-white/90 rounded-lg w-48 
//             border border-white/10"
//           >
//             <li>
//               <button
//                 onClick={logOut}
//                 className="w-full py-1 text-base text-white/90 hover:bg-red-500 hover:text-white transition-all duration-200 rounded-md"
//               >
//                 Logout
//               </button>
//             </li>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;












import { NavLink } from "react-router-dom";
import { useState } from "react";
import useAuth from "../hook/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navLinks = (
    <ul className="menu-horizontal flex items-center space-x-2">
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-blue-400 font-bold transition-all duration-200"
              : "text-white/90 font-bold hover:text-blue-300 transition-all duration-200"
          }
        >
          <span className="p-2 text-lg font-bold">Home</span>
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive
              ? "text-blue-400 font-bold transition-all duration-200"
              : "text-white/90 font-bold hover:text-blue-300 transition-all duration-200"
          }
        >
          <span className="p-2 text-lg font-bold">Dashboard</span>
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/allProperties"
          className={({ isActive }) =>
            isActive
              ? "text-blue-400 font-bold transition-all duration-200"
              : "text-white/90 font-bold hover:text-blue-300 transition-all duration-200"
          }
        >
          <span className="p-2 text-lg font-bold">All Properties</span>
        </NavLink>
      </li>

      {!user && (
        <li>
          <NavLink to="/login">
            <span className="p-1 text-lg font-bold text-white/90 hover:text-blue-300 transition-all duration-200">
              Login
            </span>
          </NavLink>
        </li>
      )}
    </ul>
  );

  return (
    <nav
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50
      w-[95%] max-w-screen 
      flex items-center justify-between gap-4
      px-6 py-6 rounded-full border border-white
      bg-[rgba(0,0,0,0.3)] backdrop-blur-[8px]
      shadow-[0_8px_32px_rgba(31,38,135,0.37)]
      hover:shadow-[0_0_50px_rgba(50,130,184,0.5)]
      hover:border-white/30
      transition-all duration-300 ease-in-out "
    >
      {/* Logo Section */}
      <NavLink to="/" className="flex items-center gap-3 shrink-0">
        <img
          className="h-12 w-12 rounded-full border-4 border-white/40 backdrop-blur-sm shadow-lg"
          src="https://i.ibb.co/CVjTYfB/Screenshot-2024-06-01-123321.png"
          alt="logo"
        />
        {/* <span className="font-bold text-4xl text-white/90 tracking-wide drop-shadow-[0_2px_4px_rgba(255,255,255,0.3)]">
          EstateElite
        </span> */}

         <span className="self-center text-3xl font-semibold whitespace-nowrap text-gradient animate-gradient ">EstateElite</span>
      </NavLink>

      {/* Nav Links */}
      <div className="hidden lg:flex items-center justify-center">{navLinks}</div>

      {/* Mobile Dropdown */}
      <div className="dropdown lg:hidden">
        <div tabIndex={0} role="button" className="btn btn-ghost">
          <i className="fa-solid fa-bars text-xl text-white"></i>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content right-0 mt-3 z-50 shadow-lg
          bg-[rgba(15,25,35,0.75)] text-white/90 rounded-xl w-52 
          border border-white/10 backdrop-blur-md"
        >
          {navLinks}
        </ul>
      </div>

      {/* User Avatar */}
      {user && (
        <div className="relative shrink-0">
          <div
            role="button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="btn btn-ghost btn-circle avatar focus:outline-none hover:scale-105 transition-transform duration-200"
          >
            <div
              title={user?.displayName}
              className="w-10 h-10 rounded-full border-2 border-white/30 hover:border-blue-400/70 transition-all duration-300 shadow-lg"
            >
              <img
                referrerPolicy="no-referrer"
                alt="User"
                src={user?.photoURL}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <>
              {/* Backdrop to close dropdown */}
              <div 
                className="fixed inset-0 z-40 pt-10" 
                onClick={() => setIsDropdownOpen(false)}
              />
              
              <ul
                className="absolute right-0 mt-8 z-50 p-2 shadow-2xl backdrop-blur-xl 
                bg-gradient-to-br from-[rgba(61,90,135,0.95)] to-[rgba(55,76,125,0.95)]
                text-white rounded-xl w-64 
                border border-white/20
                animate-in fade-in slide-in-from-top-2 duration-200"
              >
                {/* User Info Section */}
                <li className="px-3 py-2 border-b border-white/10 mb-1">
                  <div className="flex items-center gap-3">
                    <img
                      referrerPolicy="no-referrer"
                      alt="User"
                      src={user?.photoURL}
                      className="w-10 h-10 rounded-full border-2 border-blue-400/50"
                    />
                    <div className="flex flex-col">
                      <span className="font-semibold text-sm text-white">
                        {user?.displayName || "User"}
                      </span>
                      <span className="text-xs text-white/60">
                        {user?.email}
                      </span>
                    </div>
                  </div>
                </li>

                {/* Logout Button */}
                <li>
                  <button
                    onClick={() => {
                      logOut();
                      setIsDropdownOpen(false);
                    }}
                    className="w-full px-3 py-2.5 text-left text-sm font-medium
                    text-white/90 hover:bg-gradient-to-r hover:from-red-500 hover:to-red-600
                    hover:text-white transition-all duration-200 rounded-lg
                    flex items-center gap-2 group"
                  >
                    <svg 
                      className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" 
                      />
                    </svg>
                    Logout
                  </button>
                </li>
              </ul>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;