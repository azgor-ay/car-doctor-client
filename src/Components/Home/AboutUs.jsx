import React from "react";
import parts from "../../assets/images/about_us/parts.jpg";
import person from "../../assets/images/about_us/person.jpg";

const AboutUs = () => {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col justify-start items-start lg:flex-row-reverse">
        <div className="text-center lg:text-left w-1/2">
          <strong className="text-error text-xl">About Us</strong>
          <h3 className="text-5xl font-bold w-96 leading-tight mb-3 mt-5">We are qualified & of experience in this field</h3>
          <p className="pr-56 py-3">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>

          <p className="pr-56 py-3">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
          <div className="btn btn-secondary rounded-none my-5">Get more info</div>
        </div>

        <div className="w-1/2">
          <div className="relative">
            <img src={person} className="w-[460px] h-[473px] object-cover object-left rounded-xl "/>
          <img src={parts} 
          className="w-[327px] h-[332px] object-cover border-8 border-white rounded-xl absolute right-10 top-1/2"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
