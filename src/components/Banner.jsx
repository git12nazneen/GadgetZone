import vedio from '../assets/vedio.mp4'
const Banner = () => {
  return (
    <div className="banner-container">
      <video className="banner-video" autoPlay loop muted>
        <source src={vedio} type="video/mp4" />
       
      </video>
      
    </div>
  );
};

export default Banner;
