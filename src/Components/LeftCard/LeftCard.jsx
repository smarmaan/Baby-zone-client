import cardImg from "../../assets/CardPicture.png";

const LeftCard = () => {
  return (
    <div className="card mx-auto h-full bg-green-200 shadow-xl">
      <figure>
        <img src={cardImg} alt="" />
      </figure>
    </div>
  );
};

export default LeftCard;
