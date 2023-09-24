import PhonesCard from "./PhonesCard";
import PropTypes from "prop-types";

const Phones = ({ phones }) => {
  return (
    <div className="mx-5 md:mx-0 ">
      <h1 className="text-xl md:text-3xl font-semibold text-center">
        Our Phones Collections
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
        {phones?.map((phone) => (
          <PhonesCard key={phone.id} phone={phone}></PhonesCard>
        ))}
      </div>
    </div>
  );
};

Phones.propTypes = {
  phones: PropTypes.array.isRequired,
};

export default Phones;
