import Banner from "../components/Banner";
import ElectricNeed from "../components/ElectricNeed";
import SelectedItems from "../components/SelectedItems";
import GadgetSwiper from "./GadgetSwiper";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SelectedItems></SelectedItems>
            <ElectricNeed></ElectricNeed>
            <GadgetSwiper></GadgetSwiper>
        </div>
    );
};

export default Home;