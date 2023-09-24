import banner from "../../../assets/photo-1616077168079-7e09a677fb2c.avif";

const Banner = () => {
  return (
    <div className="lg:h-[70vh] my-12">
      <img className="lg:h-[70vh] w-full rounded-xl" src={banner} alt="" />
    </div>
  );
};

export default Banner;
