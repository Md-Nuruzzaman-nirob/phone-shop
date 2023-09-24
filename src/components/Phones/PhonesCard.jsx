import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const PhonesCard = ({ phone }) => {
  const { id, brand_name, image, phone_name, price, rating } = phone || {};

  return (
    <div className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
      <div className="flex justify-center items-center rounded-xl m-5">
        <img src={image} className="w-60 h-60 lg:w-80 lg:h-80 " />
      </div>
      <div className="p-6">
        <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
          {brand_name}
        </p>
        <div className="mb-2 flex items-center justify-between">
          <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
            {phone_name}
          </p>
          <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
            ${price}
          </p>
        </div>
        <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
          {rating}
        </p>
      </div>
      <div className="p-6 pt-0">
        <Link
          to={`/phones/${id}`}
          className="block w-full select-none rounded-lg bg-blue-600 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          See Details
        </Link>
      </div>
    </div>
  );
};

PhonesCard.propTypes = {
  phone: PropTypes.object.isRequired,
};
export default PhonesCard;
