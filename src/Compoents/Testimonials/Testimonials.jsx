// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Parallax, Pagination, Navigation } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/parallax';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import useReviews from '../../hook/useReviews';

// const Testimonials = () => {
//   const { data: reviews, isLoading, isError } = useReviews();

//   if (isLoading) {
//     return <div className="animate-pulse">
//       {/* Top Skeleton Bar */}
//       <div>
//         <div className="h-10 bg-gray-200 my-10 rounded"></div> {/* Skeleton bar representing a header or title */}
//       </div>

//       {/* Main Content Area */}
//       <div className="w-full h-full py-10">

//         {/* Content Skeleton Box */}
//         <div className="h-full p- rounded-lg my-4 bg-gray-200"></div> {/* Placeholder for content or card */}

//         {/* Secondary Skeleton Bar */}
//         <div className="h-10 bg-gray-200 mb-3 rounded"></div> {/* Another skeleton bar for content */}

//         {/* Flex for Avatar and Text */}
//         <div className="flex items-center justify-center mb-4">
//           <div className="w-12 h-12 rounded-full mr-4 bg-gray-200"></div> {/* Skeleton circle for avatar */}
//           <div>
//             {/* Name or Title Skeleton */}
//             <div className="h-4 bg-gray-200 rounded"></div> {/* Skeleton for name or title text */}
//           </div>
//         </div>

//         {/* More Skeleton Bars */}
//         <div className="h-10 bg-gray-200 rounded"></div> {/* Skeleton bar representing additional content */}
//         <div className="h-4 bg-gray-200 rounded"></div> {/* Skeleton bar for smaller content */}
//       </div>
//     </div>

//   }

//   if (isError) {
//     return <div>Error loading reviews</div>;
//   }

//   // Sort reviews by reviewTime in descending order
//   const sortedReviews = reviews.sort((a, b) => new Date(b.reviewTime) - new Date(a.reviewTime));

//   return (
//     <>
//       <div>
//         <h1 className="text-4xl font-extrabold font-sans text-center my-10">User Reviews</h1>
//       </div>
//       <div className="relative w-full h-full  py-12">
//         <Swiper
//           modules={[Parallax, Pagination, Navigation]}
//           centeredSlides={true}
//           parallax={true}
//           navigation={true}
//         >
//           <div
//             slot="container-start"
//             className="parallax-bg absolute top-0 left-0 w-full h-full bg-cover bg-center"
//             style={{ backgroundImage: 'url(/)' }}
//             data-swiper-parallax="-23%"
//           ></div>

//           {sortedReviews.map((review, index) => (
//             <SwiperSlide key={index}>
//               <div
//                 className="flex flex-col items-center justify-center h-full p-6 rounded-lg my-4 bg-[#ffffff43]"
//                 style={{ boxShadow: '0 1px 8px rgba(0, 0, 0, 0.5)' }}
//               >
//                 <p className="text-2xl pb-3" data-swiper-parallax="-200">
//                   {review.title}
//                 </p>

//                 <div className="flex items-center mb-4">
//                   <img
//                     src={review.photo}
//                     alt={review.name}
//                     className="w-12 h-12 rounded-full mr-4"
//                     data-swiper-parallax="-400"
//                   />
//                   <div>
//                     <h3 className="text-lg font-semibold" data-swiper-parallax="-200">
//                       {review.name}
//                     </h3>
//                   </div>
//                 </div>

//                 <div
//                   className="mb-4 text-gray-700"
//                   data-swiper-parallax="-400"
//                   data-swiper-parallax-duration="900"
//                 >
//                   <p>{review.review}</p>
//                 </div>
//                 <div
//                   className="opacity-50 transform scale-95"
//                   data-swiper-parallax-opacity="0.5"
//                   data-swiper-parallax-scale="0.15"
//                 >
//                   <p className="text-sm text-gray-600">{new Date(review.reviewTime).toLocaleDateString()}</p>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </>
//   );
// };

// export default Testimonials;





// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Parallax, Pagination, Navigation } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/parallax';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import useReviews from '../../hook/useReviews';

// const Testimonials = () => {
//   const { data: reviews, isLoading, isError } = useReviews();

//   if (isLoading) {
//     return (
//       <div className="max-w-5xl mx-auto px-4 py-16 animate-pulse">
//         <div className="h-12 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-xl mb-12 max-w-md mx-auto"></div>
        
//         <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl p-8">
//           <div className="space-y-6">
//             <div className="h-8 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-lg w-3/4 mx-auto"></div>
            
//             <div className="flex items-center justify-center gap-4 py-6">
//               <div className="w-16 h-16 rounded-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200"></div>
//               <div className="space-y-2">
//                 <div className="h-5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded w-32"></div>
//                 <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded w-24"></div>
//               </div>
//             </div>
            
//             <div className="space-y-3">
//               <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded"></div>
//               <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded w-5/6"></div>
//               <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded w-4/6"></div>
//             </div>
            
//             <div className="h-3 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded w-32 mx-auto mt-8"></div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   if (isError) {
//     return (
//       <div className="max-w-5xl mx-auto px-4 py-16">
//         <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
//           <p className="text-red-700 font-medium">Error loading reviews. Please try again later.</p>
//         </div>
//       </div>
//     );
//   }

//   const sortedReviews = reviews.sort((a, b) => new Date(b.reviewTime) - new Date(a.reviewTime));

//   return (
//     <section className="max-w-6xl mx-auto px-4 py-16">
//       <div className="text-center mb-16">
//         <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-4">
//           User Reviews
//         </h1>
//         <div className="w-24 h-1.5 bg-gradient-to-r from-gray-400 via-gray-600 to-gray-400 mx-auto rounded-full"></div>
//       </div>

//       <div className="relative testimonials-container">
//         <Swiper
//           modules={[Parallax, Pagination, Navigation]}
//           centeredSlides={true}
//           parallax={true}
//           navigation={true}
//           pagination={{ clickable: true }}
//           spaceBetween={30}
//           className="pb-16"
//         >
//           <div
//             slot="container-start"
//             className="parallax-bg absolute top-0 left-0 w-full h-full bg-cover bg-center"
//             style={{ backgroundImage: 'url(/)' }}
//             data-swiper-parallax="-23%"
//           ></div>

//           {sortedReviews.map((review, index) => (
//             <SwiperSlide key={index}>
//               <div className="max-w-4xl mx-auto">
//                 <div
//                   className="relative overflow-hidden rounded-2xl bg-[#ffffff43] backdrop-blur-sm p-8 md:p-12 transition-all duration-300 hover:shadow-2xl"
//                   style={{ boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)' }}
//                 >
//                   {/* Decorative corner accent */}
//                   <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-200/20 to-transparent rounded-bl-full"></div>
//                   <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-gray-200/20 to-transparent rounded-tr-full"></div>

//                   <div className="relative z-10">
//                     {/* Quote icon */}
//                     <div className="flex justify-center mb-6" data-swiper-parallax="-100">
//                       <svg className="w-12 h-12 text-gray-400 opacity-50" fill="currentColor" viewBox="0 0 24 24">
//                         <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
//                       </svg>
//                     </div>

//                     {/* Title */}
//                     <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800" data-swiper-parallax="-200">
//                       {review.title}
//                     </h2>

//                     {/* Review text */}
//                     <div
//                       className="mb-8 text-gray-700 text-center text-lg leading-relaxed max-w-3xl mx-auto"
//                       data-swiper-parallax="-400"
//                       data-swiper-parallax-duration="900"
//                     >
//                       <p className="italic">"{review.review}"</p>
//                     </div>

//                     {/* Divider */}
//                     <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mb-8"></div>

//                     {/* Author info */}
//                     <div className="flex items-center justify-center gap-4" data-swiper-parallax="-300">
//                       <div className="relative">
//                         <img
//                           src={review.photo}
//                           alt={review.name}
//                           className="w-16 h-16 rounded-full object-cover ring-4 ring-white shadow-lg"
//                         />
//                         <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-white"></div>
//                       </div>
//                       <div className="text-left">
//                         <h3 className="text-xl font-bold text-gray-800">
//                           {review.name}
//                         </h3>
//                         <p className="text-sm text-gray-500 flex items-center gap-1">
//                           <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
//                             <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
//                           </svg>
//                           {new Date(review.reviewTime).toLocaleDateString('en-US', { 
//                             year: 'numeric', 
//                             month: 'long', 
//                             day: 'numeric' 
//                           })}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       <style jsx>{`
//         .testimonials-container :global(.swiper-button-next),
//         .testimonials-container :global(.swiper-button-prev) {
//           color: #4B5563;
//           background: white;
//           width: 48px;
//           height: 48px;
//           border-radius: 50%;
//           box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
//           transition: all 0.3s ease;
//         }
        
//         .testimonials-container :global(.swiper-button-next):hover,
//         .testimonials-container :global(.swiper-button-prev):hover {
//           background: #F3F4F6;
//           transform: scale(1.1);
//         }
        
//         .testimonials-container :global(.swiper-button-next::after),
//         .testimonials-container :global(.swiper-button-prev::after) {
//           font-size: 20px;
//           font-weight: bold;
//         }
        
//         .testimonials-container :global(.swiper-pagination-bullet) {
//           width: 12px;
//           height: 12px;
//           background: #9CA3AF;
//           opacity: 1;
//           transition: all 0.3s ease;
//         }
        
//         .testimonials-container :global(.swiper-pagination-bullet-active) {
//           background: #4B5563;
//           width: 32px;
//           border-radius: 6px;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Testimonials;






import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/parallax';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import useReviews from '../../hook/useReviews';

const Testimonials = () => {
  const { data: reviews, isLoading, isError } = useReviews();

  if (isLoading) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-16 animate-pulse">
        <div className="h-12 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-xl mb-12 max-w-md mx-auto"></div>
        
        <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl p-8">
          <div className="space-y-6">
            <div className="h-8 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-lg w-3/4 mx-auto"></div>
            
            <div className="flex items-center justify-center gap-4 py-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200"></div>
              <div className="space-y-2">
                <div className="h-5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded w-32"></div>
                <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded w-24"></div>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded"></div>
              <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded w-5/6"></div>
              <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded w-4/6"></div>
            </div>
            
            <div className="h-3 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded w-32 mx-auto mt-8"></div>
          </div>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
          <p className="text-red-700 font-medium">Error loading reviews. Please try again later.</p>
        </div>
      </div>
    );
  }

  const sortedReviews = reviews.sort((a, b) => new Date(b.reviewTime) - new Date(a.reviewTime));

  return (
    <section className=" py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent mb-4">
          User Reviews
        </h1>
        <div className="w-24 h-1.5 bg-gradient-to-r from-gray-400 via-gray-600 to-gray-400 mx-auto rounded-full"></div>
      </div>

      <div className="relative w-full testimonials-container">
        <Swiper
          modules={[Parallax, Pagination, Navigation]}
          centeredSlides={true}
          parallax={true}
          navigation={true}
          pagination={{ clickable: true }}
          spaceBetween={30}
          className="pb-16"
        >
          <div
            slot="container-start"
            className="parallax-bg absolute top-0 left-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: 'url(/)' }}
            data-swiper-parallax="-23%"
          ></div>

          {sortedReviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="w-full">
                <div
                  className="relative overflow-hidden rounded-xl bg-[#ffffff43] backdrop-blur-sm p-8 md:p-12 transition-all duration-300 hover:shadow-2xl"
                  style={{ boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)' }}
                >
                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-200/20 to-transparent rounded-bl-full"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-gray-200/20 to-transparent rounded-tr-full"></div>

                  <div className="relative z-10">
                    {/* Quote icon */}
                    <div className="flex justify-center mb-6" data-swiper-parallax="-100">
                      <svg className="w-12 h-12 text-gray-400 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800" data-swiper-parallax="-200">
                      {review.title}
                    </h2>

                    {/* Review text */}
                    <div
                      className="mb-8 text-gray-700 text-center text-lg leading-relaxed"
                      data-swiper-parallax="-400"
                      data-swiper-parallax-duration="900"
                    >
                      <p className="italic">"{review.review}"</p>
                    </div>

                    {/* Divider */}
                    <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mb-8"></div>

                    {/* Author info */}
                    <div className="flex items-center justify-center gap-4" data-swiper-parallax="-300">
                      <div className="relative">
                        <img
                          src={review.photo}
                          alt={review.name}
                          className="w-16 h-16 rounded-full object-cover ring-4 ring-white shadow-lg"
                        />
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-white"></div>
                      </div>
                      <div className="text-left">
                        <h3 className="text-xl font-bold text-gray-800">
                          {review.name}
                        </h3>
                        <p className="text-sm text-gray-500 flex items-center gap-1">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                          </svg>
                          {new Date(review.reviewTime).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx>{`
        .testimonials-container :global(.swiper-button-next),
        .testimonials-container :global(.swiper-button-prev) {
          color: #4B5563;
          background: white;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          transition: all 0.3s ease;
        }
        
        .testimonials-container :global(.swiper-button-next):hover,
        .testimonials-container :global(.swiper-button-prev):hover {
          background: #F3F4F6;
          transform: scale(1.1);
        }
        
        .testimonials-container :global(.swiper-button-next::after),
        .testimonials-container :global(.swiper-button-prev::after) {
          font-size: 20px;
          font-weight: bold;
        }
        
        .testimonials-container :global(.swiper-pagination-bullet) {
          width: 12px;
          height: 12px;
          background: #9CA3AF;
          opacity: 1;
          transition: all 0.3s ease;
        }
        
        .testimonials-container :global(.swiper-pagination-bullet-active) {
          background: #4B5563;
          width: 32px;
          border-radius: 6px;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;


