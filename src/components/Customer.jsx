
import gadget from '../assets/gadget.jpg';

const Customer = () => {
  return (
    <div className="relative w-full py-36 bg-cover bg-center" style={{ backgroundImage: `url(${gadget})` }}>
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative flex items-center h-full max-w-6xl mx-auto">
        <div className="text-white p-6 md:p-12 lg:px-28 max-w-2xl">
          <h1 className="text-3xl md:text-4xl lg:text-xl font-bold mb-4">Gadget Lover</h1>
          <p className="text-base md:text-lg lg:text-sm">
            Voltaree is my go-to for all things electronic. Their selection is unmatched, and the knowledgeable staff ensures I make the right choices. It’s more than a store; it’s a tech enthusiast’s haven.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Customer;
