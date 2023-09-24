/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const FavoritesCard = ({ favoriteItem }) => {
  const { id, brand_name, image, phone_name, price } = favoriteItem || {};
  // console.log(favoriteItem);

  return (
    <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700 mr-5">
        <img src={image} />
      </div>
      <div>
        <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-blue-600 antialiased">
          {brand_name}
        </h6>
        <div className="mb-2">
          <h4 className="mb-2 block font-sans text-lg md:text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {phone_name}
          </h4>
          <p className=" font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
            ${price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FavoritesCard;
