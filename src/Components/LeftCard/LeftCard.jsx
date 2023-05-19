import cardImg from "../../assets/CardPicture.png";

const LeftCard = () => {
  return (
    <div className="card mx-5 md:mx-auto h-full bg-[#fbffdc] shadow-xl">
      <figure className="m-auto ">
        <img className="" src={cardImg} alt="" />
      </figure>
    </div>
  );
};

export default LeftCard;
