import React from "react";
import picture from "../assets/picture.jpg";
const MainSection = () => {
  return (
    <div className="w-[100%] flex justify-between mt-[20px] bg-stone-900">
      <div className="w-[45%] flex justify-center">
        <img src={picture} alt="" className="w-[50%] rounded-full" />
      </div>
      <div className="w-[45%] flex justify-center text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ipsam
        earum eum repellat! Animi suscipit dicta cumque vitae totam eaque hic
        itaque pariatur eum rem quibusdam, commodi magni autem necessitatibus.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis error
        nihil praesentium libero, aut ullam delectus quibusdam sit quidem, nisi
        corrupti et a ex voluptas, facilis illo consequuntur dicta.
        Delectus?Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Officiis porro, ea inventore a natus quisquam sit repudiandae tempore,
        dicta vitae, eligendi id iure tenetur amet optio maxime asperiores
        minima assumenda?
      </div>
    </div>
  );
};

export default MainSection;
