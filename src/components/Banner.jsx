import vedio from "../assets/vedio.mp4";

const Banner = () => {
  return (
    <div className="banner-container relative mx-auto w-full h-[70vh] md:h-[80vh] lg:h-[90vh]">
      <video
        className="banner-video object-cover w-full h-full"
        autoPlay
        loop
        muted
      >
        <source src={vedio} type="video/mp4" />
      </video>
    </div>
  );
};

export default Banner;
