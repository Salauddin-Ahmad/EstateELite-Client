// import { useQuery } from "@tanstack/react-query";
// import useAuth from "../../hook/useAuth";
// import useAxiosSecure from "../../hook/useAxiosSecure";
// import { Link } from "react-router-dom";

// const AdvertisedLists = () => {
//   const axiosSecure = useAxiosSecure();
//   const { user } = useAuth();

//   const { data: properties, isLoading, error } = useQuery({
//     queryKey: ['advertised'],
//     queryFn: async () => {
//       const res = await axiosSecure.get(`/advertised`);
//       return res.data;
//     },
//   });

//   // if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error fetching properties</div>;

//   return (
//     <>
//       <div>
//         <h1 className="text-4xl font-extrabold text-center my-10  ">
//           Top Trending Properties
//         </h1>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 px-4 lg:px-0">
//         {properties?.map(property => (
//           <div
//             key={property._id}
//             className="bg-[#ffffff4b] backdrop-blur-lg rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
//           >
//             <div className="relative overflow-hidden rounded-t-xl">
//               <img
//                 className="w-full h-52 object-cover transition-transform duration-300 hover:scale-110"
//                 src={property.propertyImage}
//                 alt={property.title}
//               />
//               <div className="absolute bottom-3 left-3 bg-black/70 text-white text-sm px-2 py-1 rounded-md">
//                 Featured
//               </div>
//             </div>
//             <div className="p-5 space-y-2">
//               <h2 className="text-xl font-semibold text-gray-800">{property.title}</h2>
//               <p className="text-gray-500">
//                 <span className="font-semibold text-gray-700">Price range:</span> ${property.priceRangeMin} - ${property.priceRangeMax}
//               </p>
//               <div className="flex justify-center pt-4">
//                 <Link to={`/property/${property._id}`}>
//                   <button className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-teal-400 rounded-full shadow-md hover:shadow-lg transform transition-transform hover:scale-105 focus:outline-none">
//                     View Details
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default AdvertisedLists;





import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hook/useAuth";
import useAxiosSecure from "../../hook/useAxiosSecure";
import { Link } from "react-router-dom";

const AdvertisedLists = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { data: properties, isLoading, error } = useQuery({
    queryKey: ['advertised'],
    queryFn: async () => {
      const res = await axiosSecure.get(`/advertised`);
      return res.data;
    },
  });

  if (error) return <div>Error fetching properties</div>;

  return (
    <>
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center my-10 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
          Top Trending Properties
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-400 mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 px-4 lg:px-8">
        {properties?.map(property => (
          <div
            key={property._id}
            className="group bg-[#A0ABBA] backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/20"
          >
            <div className="relative overflow-hidden">
              <img
                className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                src={property.propertyImage}
                alt={property.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-teal-400 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm">
                Featured
              </div>
            </div>
            
            <div className="p-6 space-y-4">
              <h2 className="text-xl font-bold text-gray-800 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                {property.title}
              </h2>
              
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gray-600">
                  <span className="font-semibold text-gray-800">${property.priceRangeMin.toLocaleString()}</span>
                  <span className="mx-1 text-gray-400">-</span>
                  <span className="font-semibold text-gray-800">${property.priceRangeMax.toLocaleString()}</span>
                </p>
              </div>
              
              <div className="pt-2">
                <Link to={`/property/${property._id}`}>
                  <button className="w-full px-5 py-3 text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-teal-400 rounded-xl shadow-md hover:shadow-xl transform transition-all duration-300 hover:scale-[1.02] hover:from-blue-600 hover:to-teal-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2">
                  View Details
                  <svg className="inline-block ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AdvertisedLists;

