import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hook/useAxiosSecure";
import AdvertisedLists from "../AdvertisedLists/AdvertisedLists";
import FAQSection from "../FAQSection";
import Testimonials from "../Testimonials/Testimonials";
import WhyUS from "../WhyUS";
import Sliders from "./Sliders";
import SkeletonDynamic from "../skeletons/SkeletonDynamic";
import Navbar from "../Navbar";



const Home = () => {

    const axiosSecure = useAxiosSecure()

    const { data: properties, error, isLoading } = useQuery({
        queryKey: ['advertised'],
        queryFn: async () => {
            const res = await axiosSecure.get('/advertised');
            return res.data;
        }
    })

    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="relative -mt-28">
            <Navbar></Navbar>
           <div className="position">
             
             <Sliders></Sliders>
           </div>
           <div className="max-w-screen mx-auto px-10">
             {!isLoading ? <AdvertisedLists /> : <SkeletonDynamic cardCount={6} />}
            <Testimonials></Testimonials>
            <WhyUS></WhyUS>
            <FAQSection></FAQSection>
           </div>
        </div>
    );
};

export default Home;