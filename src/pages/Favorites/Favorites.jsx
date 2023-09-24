import { useEffect, useState } from "react";
import FavoritesCard from "./FavoritesCard";
import swal from "sweetalert";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [total, SetTotal] = useState();
  const [notFound, setNotFound] = useState(false);
  const [toggle, setToggle] = useState(false);
  console.log(toggle);

  useEffect(() => {
    const favoriteItems = JSON.parse(localStorage.getItem("favorite"));

    if (favoriteItems) {
      setFavorites(favoriteItems);
      const total = favoriteItems.reduce(
        (preValue, currValue) => preValue + currValue.price,
        0
      );
      SetTotal(total);
    } else {
      setNotFound("Sorry!!! No Data Found");
    }
  }, []);
  // console.log(favorites);

  const handleDelete = () => {
    localStorage.clear();
    setFavorites([]);
    setNotFound("Sorry!!! No Data Found");
    swal("success!", "Deleted All Items !", "success");
  };

  const handleMoreOrLess = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      {notFound ? (
        <p className="h-[90vh] flex justify-center items-center text-2xl font-medium">
          {notFound}
        </p>
      ) : (
        <div>
          <div className="flex flex-row-reverse justify-around items-center gap- text-center my-10 bg-blue-300 py-5 rounded-xl">
            <button
              onClick={handleDelete}
              className="rounded-lg py-1 px-6 text-center font-sans text-lg font-medium bg-blue-600 text-white transition-all hover:bg-blue-700  disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              Delete All
            </button>
            <p className="text-lg font-semibold">
              Total Price : ${Math.round(total)}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 my-12">
            {toggle
              ? favorites.map((favoriteItem) => (
                  <FavoritesCard
                    key={favoriteItem.id}
                    favoriteItem={favoriteItem}
                  ></FavoritesCard>
                ))
              : favorites
                  .slice(0, 4)
                  .map((favoriteItem) => (
                    <FavoritesCard
                      key={favoriteItem.id}
                      favoriteItem={favoriteItem}
                    ></FavoritesCard>
                  ))}
          </div>

          {favorites.length > 4 && (
            <div className=" text-center my-10">
              <button
                onClick={handleMoreOrLess}
                className="rounded-lg py-1 px-6 text-center font-sans text-lg font-medium bg-blue-600 text-white transition-all hover:bg-blue-700  disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                {toggle ? "See Less" : "See More"}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Favorites;
