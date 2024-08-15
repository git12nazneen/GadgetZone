import Banner from "../components/Banner";
import SelectedItems from "../components/SelectedItems";
import GadgetSwiper from "./GadgetSwiper";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SelectedItems></SelectedItems>
            <GadgetSwiper></GadgetSwiper>
        </div>
    );
};

export default Home;