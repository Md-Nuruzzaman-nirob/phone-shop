import { useLoaderData, useParams } from "react-router-dom";
import PhoneCard from "./PhoneCard";
import { useEffect, useState } from "react";

const Phone = () => {
  const [phone, setPhone] = useState({});

  const { id } = useParams();
  const allPhones = useLoaderData();

  useEffect(() => {
    const findPhone = allPhones?.find((phone) => phone.id === id);
    setPhone(findPhone);
  }, [id, allPhones]);

  return (
    <div className="h-[80vh] flex justify-center items-center mx-5 md:mx-0">
      <PhoneCard phone={phone}></PhoneCard>
    </div>
  );
};

export default Phone;
