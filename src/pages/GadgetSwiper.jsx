
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper as ReactSwiper, SwiperSlide } from "swiper/react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import Card from "../components/Card";

const GadgetSwiper = () => {
  const {
    isLoading,
    error,
    data: products,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("https://server-idrfits0y-nazneen-sultanas-projects.vercel.app/products");
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    },
  });

  if (isLoading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-10">Error loading products</div>;
  }

  return (
    <div className="bg-slate-100 py-10">
      <div className="relative mx-auto w-full max-w-[550px]">
        <ReactSwiper
          spaceBetween={10}
          slidesPerView={2}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Navigation, Pagination, Scrollbar]}
          breakpoints={{
            350: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
          className="relative"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id} className="flex justify-center">
              <Card card={product} />
            </SwiperSlide>
          ))}
        </ReactSwiper>
        {/* Navigation buttons */}
        <div className="swiper-button-prev absolute top-1/2 left-0 transform -translate-y-1/2 bg-orange-600 text-white p-2 rounded-full cursor-pointer z-10">
          <FaAngleLeft />
        </div>
        <div className="swiper-button-next absolute top-1/2 right-0 transform -translate-y-1/2 bg-orange-600 text-white p-2 rounded-full cursor-pointer z-10">
          <FaAngleRight />
        </div>
      </div>
    </div>
  );
};

export default GadgetSwiper;

