import Banner from "../components/Banner";
import BuyingCart from "../components/BuyingCart";
import Customer from "../components/Customer";
import ElectricNeed from "../components/ElectricNeed";
import SelectedItems from "../components/SelectedItems";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SelectedItems></SelectedItems>
            <ElectricNeed></ElectricNeed>
            <BuyingCart></BuyingCart>
            <Customer></Customer>
        </div>
    );
};

export default Home;