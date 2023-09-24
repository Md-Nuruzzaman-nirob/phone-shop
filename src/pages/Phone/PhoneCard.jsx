import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const PhoneCard = ({ phone }) => {
  const { id, brand_name, image, phone_name, price } = phone || {};

  const handleClickAddLocalStorage = () => {
    const addFavoriteItem = [];
    const favoriteItems = JSON.parse(localStorage.getItem("favorite"));

    if (!favoriteItems) {
      addFavoriteItem.push(phone);
      localStorage.setItem("favorite", JSON.stringify(addFavoriteItem));
      swal("Good job!", "Products added successfully!", "success");
    } else {
      const isExits = favoriteItems.find((item) => item.id === id);

      if (!isExits) {
        addFavoriteItem.push(...favoriteItems, phone);
        localStorage.setItem("favorite", JSON.stringify(addFavoriteItem));
        swal("Good job!", "Products added successfully!", "success");
      } else {
        swal("Error!", "No duplicate !", "error");
      }
    }
  };

  return (
    <div>
      <div>
        <h1 className="text-xl md:text-3xl font-semibold text-center my-10">
          Phone Details
        </h1>
      </div>
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

          <button
            onClick={handleClickAddLocalStorage}
            className="rounded-lg py-1 px-6 font-sans font-medium bg-blue-600 text-xs text-white transition-all hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            Add to Favorites
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              ></path>
            </svg>
          </button>
          <Link to={"/"}>
            <button className="rounded-lg py-1 px-6 text-xs font-sans font-medium bg-blue-600 text-white transition-all hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-non block my-3">
              Go Back
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                ></path>
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
PhoneCard.propTypes = {
  phone: PropTypes.object.isRequired,
};

export default PhoneCard;
