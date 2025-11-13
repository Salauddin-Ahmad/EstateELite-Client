// import { NavLink } from "react-router-dom";
// import useAuth from "../hook/useAuth";

// const Navbar = () => {
//   const { user, logOut } = useAuth();
//   const navLinks = (
//     <>
//       <ul className=" menu-horizontal px-1 py-6  ">
//         <li>
//           <NavLink
//             to="/"
//             className={({ isActive }) =>
//               isActive
//                 ? "text-blue-600 rounded-lg font-bold hover:bg-transparent "
//                 : "font-bold "
//             }
//           >
//             <span className="p-2 text-lg font-bold">Home</span>
//           </NavLink>
//         </li>

//         <li>
//           <NavLink
//             to="/dashboard"
//             className={({ isActive }) =>
//               isActive
//                 ? "text-green-600 rounded-lg font-bold hover:bg-transparent "
//                 : "font-bold "
//             }
//           >
//             <span className="p-2 text-lg font-bold ">Dashboard</span>
//           </NavLink>
//         </li>

//         <li>
//           <NavLink
//             to="/allProperties"
//             className={({ isActive }) =>
//               isActive
//                 ? "text-blue-600 rounded-lg border[#58d4db77]  font-bold hover:bg-transparent "
//                 : "font-bold "
//             }
//           >
//             <span className="p-2 text-lg font-bold">All Properties</span>
//           </NavLink>
//         </li>

//         {!user && (
//           <li>
//             <NavLink to="/login">
//               <span className="p-1  text-lg font-bold">Login</span>
//             </NavLink>
//           </li>
//         )}
//       </ul>
//     </>
//   );
//   return (
//   <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 
//     bg-[rgba(112,196,212,0.6)] backdrop-blur-[2px] 
//     rounded-full shadow-2xl 
//     px-4 py-1 flex items-center justify-between 
//     w-[95%] max-w-screen-3xl">
      
//       <div className="flex-1">
//         <div className="dropdown relative">
//           <div tabIndex={0} role="button" >
//               <NavLink to="/" className="flex gap-2 items-center">
//                 <img
//                   className="w-full h-12 rounded-full border-4 border-gray-400"
//                   src="https://i.ibb.co/CVjTYfB/Screenshot-2024-06-01-123321.png"
//                   alt=""
//                 />
//                 {/* <span className="font-bold text-4xl">EstateElite</span> */}
//                 <span className="font-bold text-4xl text-gradient animate-gradient">EstateElite</span>


//               </NavLink>
//           </div>
//           <ul
//             tabIndex={0}
//             className="menu menu-sm dropdown-content  z-50  shadow bg-base-100 rounded-box w-52 lg:hidden"
//           >
//             {navLinks}
//           </ul>
//         </div>
//       </div>
//       <div className="flex-none">
//         <div className="hidden lg:block ">{navLinks}</div>
  
//         {user && (
//           <div className="relative z-50">
//             <div className="dropdown dropdown-end">
//               <div
//                 tabIndex={0}
//                 role="button"
//                 className="btn btn-ghost btn-circle avatar focus:outline-none"
//               >
//                 <div title={user?.displayName} className="w-10 h-10 rounded-full border-2 border-transparent hover:border-primary transition-all duration-300">
//                   <img
//                     referrerPolicy="no-referrer"
//                     alt="User Profile Photo"
//                     src={user?.photoURL}
//                     className="w-full h-full object-cover rounded-full"
//                   />
//                 </div>
//               </div>

//               <ul
//                 tabIndex={0}
//                 className="  dropdown-content  p-1 shadow-lg backdrop-blur-4xl  bg-[rgba(206,212,236,0.79)]  rounded-lg w-48 border border-gray-200"
//               >
//                 <li>
//                   <button
//                     onClick={logOut}
//                     className="w-full  py-1 text-base text-gray-700 hover:bg-[#dd1919]  transition-colors rounded-md hover:scale-95 ease-in-300"
//                   >
//                     Logout
//                   </button>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         )}


//       </div>
//     </div>
//   );
// };

// export default Navbar;



import { NavLink } from "react-router-dom";
import useAuth from "../hook/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();

  const navLinks = (
    <>
      <ul className="menu-horizontal px-1 py-6">
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
                ? "text-emerald-400 font-bold transition-all duration-200"
                : "text-white/90 font-bold hover:text-emerald-300 transition-all duration-200"
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
    </>
  );

  return (
    <div
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 
      w-[95%] max-w-screen-3xl
      px-4 py-1 flex items-center justify-between 
      rounded-full border
      bg-[rgba(0,0,0,0.26)] 
      backdrop-blur-[6px]
      shadow-[0_8px_32px_rgba(31,38,135,0.37)]
      hover:shadow-[0_0_50px_rgba(50,130,184,0.45)]
      transition-all duration-300 ease-in-out
      "
    >
      {/* Brand / Logo Section */}
      <div className="flex-1">
        <div className="dropdown relative">
          <div tabIndex={0} role="button">
            <NavLink to="/" className="flex gap-2 items-center">
              <img
                className="w-full h-12 rounded-full border-4 border-white/40 backdrop-blur-sm"
                src="https://i.ibb.co/CVjTYfB/Screenshot-2024-06-01-123321.png"
                alt="logo"
              />
              <span className="font-bold text-4xl text-white/90 tracking-wide drop-shadow-[0_1px_2px_rgba(255,255,255,0.25)]">
                EstateElite
              </span>
            </NavLink>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content z-50 shadow-lg 
            bg-[rgba(15,25,35,0.75)] text-white/90 rounded-xl w-52 lg:hidden 
            border border-white/10 backdrop-blur-md"
          >
            {navLinks}
          </ul>
        </div>
      </div>

      {/* Navigation + User Section */}
      <div className="flex-none">
        <div className="hidden lg:block">{navLinks}</div>

        {user && (
          <div className="relative z-50">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar focus:outline-none"
              >
                <div
                  title={user?.displayName}
                  className="w-10 h-10 rounded-full border-2 border-transparent hover:border-blue-300/70 transition-all duration-300"
                >
                  <img
                    referrerPolicy="no-referrer"
                    alt="User Profile Photo"
                    src={user?.photoURL}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              <ul
                tabIndex={0}
                className="dropdown-content p-1 shadow-lg backdrop-blur-xl 
                bg-[rgba(25,35,45,0.8)] text-white/90 rounded-lg w-48 border border-white/10"
              >
                <li>
                  <button
                    onClick={logOut}
                    className="w-full py-1 text-base text-white/90 hover:bg-red-500 hover:text-white transition-all duration-200 rounded-md"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

