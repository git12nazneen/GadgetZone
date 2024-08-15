import Banner from "../components/Banner";
import Customer from "../components/Customer";
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
            <Customer></Customer>
        </div>
    );
};

export default Home;