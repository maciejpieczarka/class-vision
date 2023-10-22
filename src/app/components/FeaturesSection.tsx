import React from "react";
import Image, { StaticImageData } from "next/image";
import ClassBgImg from "../../assets/Class-bg.svg";
import VisionBgImg from "../../assets/Vision-bg.svg";
import EasyUseImg from "../../assets/easy-use.svg";
import WebDesigne from "../../assets/web-design.svg";
import Lightbulb from "../../assets/lightbulb.svg";

export default function FeaturesSection() {
  return (
    <section className="flex flex-col justify-center items-center gap-2 mt-36 pb-44">
      <h3 className="font-raleway-semibold text-[40px]">Co oferujemy?</h3>
      <p className="text-[#929292] text-sm lg:w-96 w-64 text-center">
        lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem
        ipsumlorem ipsumlorem ipsumlorem ipsum
      </p>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full">
          <Image src={ClassBgImg} alt="" />
        </div>
        <div className="w-full flex justify-end">
          <Image src={VisionBgImg} alt="" />
        </div>
        <div className="flex flex-row justify-center items-center gap-20 absolute">
          <Feature name={"Szybkość i prostota"} icon={EasyUseImg} description={"loremip sumloremi psumloremipsum loremipsum loremipsuml oremipsum"} />
          <Feature name={"Nowoczesny design"} icon={WebDesigne} description={"loremip sumloremi psumloremipsum loremipsum loremipsuml oremipsum"} />
          <Feature name={"Funkcjonalność nie znana do tej pory"} icon={Lightbulb} description={"loremip sumloremi psumloremipsum loremipsum loremipsuml oremipsum"} />
        </div>
      </div>
    </section>
  );
}

interface FeatureProps {
  name: string;
  icon: StaticImageData;
  description: string;
}

const Feature = ({ name, icon, description }: FeatureProps) => {
  return (
    <div className="bg-[#e1e1e153] backdrop-blur-md px-5 h-[25rem] rounded-lg border-[1px] shadow-sm min-h-64 gap-5 flex flex-col justify-evenly items-center">
      <h4 className="font-raleway-semibold text-xl w-64 text-center">{name}</h4>
      <div>
        <Image src={icon} alt="" />
      </div>
      <p className="w-64 mx-auto flex flex-wrap text-center">
        {description}
      </p>
    </div>
  );
};
