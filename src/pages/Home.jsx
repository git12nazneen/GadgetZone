import Banner from "../components/Banner";
import BuyingCart from "../components/BuyingCart";
import Customer from "../components/Customer";
import ElectricNeed from "../components/ElectricNeed";
import Review from "../components/Review";
import SelectedItems from "../components/SelectedItems";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SelectedItems></SelectedItems>
            <ElectricNeed></ElectricNeed>
            <BuyingCart></BuyingCart>
            <Customer></Customer>
            <Review></Review>
        </div>
    );
};

export default Home;