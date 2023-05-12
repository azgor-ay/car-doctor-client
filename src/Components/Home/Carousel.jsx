import React from "react";
import img1 from "../../assets/images/banner/1.jpg";
import img2 from "../../assets/images/banner/2.jpg";
import img3 from "../../assets/images/banner/3.jpg";
import img4 from "../../assets/images/banner/4.jpg";
import img5 from "../../assets/images/banner/5.jpg";
import img6 from "../../assets/images/banner/6.jpg";

const Carousel = () => {
  return (
    <div>
      <div className="carousel w-full h-[600px] rounded-lg">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-full object-cover object-top" />
          <div className="absolute text-white space-y-3 p-12 pt-[167px] bg-gradient-to-r from-black to-[rgba(21, 21, 21, 0)]">
            <h2 className="text-6xl font-extrabold leading-tight">
              Affordable <br /> Price For Car <br /> Servicing
            </h2>
            <p className="w-96 py-5">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex">
              <button className="btn btn-secondary rounded-md mr-5">
                Discover More
              </button>
              <div className="btn btn-outline rounded-md text-white">Latest Project</div>
            </div>
          </div>
          <div className="absolute text-white space-y-3 p-12 pt-[167px] bg-gradient-to-r from-black to-[rgba(21, 21, 21, 0)]">
            <h2 className="text-6xl font-extrabold leading-tight">
              Affordable <br /> Price For Car <br /> Servicing
            </h2>
            <p className="w-96 py-5">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex">
              <button className="btn btn-secondary rounded-md mr-5">
                Discover More
              </button>
              <div className="btn btn-outline rounded-md text-white">Latest Project</div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-24 bottom-0 gap-4">
            <a
              href="#slide4"
              className="btn btn-circle bg-white bg-opacity-50 text-black border-none"
            >
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle btn-secondary">
              ❯
            </a>
          </div>
        </div>

        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full object-cover object-top" />
          <div className="absolute text-white space-y-3 p-12 pt-[167px] bg-gradient-to-r from-black to-[rgba(21, 21, 21, 0)]">
            <h2 className="text-6xl font-extrabold leading-tight">
              Affordable <br /> Price For Car <br /> Servicing
            </h2>
            <p className="w-96 py-5">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex">
              <button className="btn btn-secondary rounded-md mr-5">
                Discover More
              </button>
              <div className="btn btn-outline rounded-md text-white">Latest Project</div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-24 bottom-0 gap-4">
            <a
              href="#slide1"
              className="btn btn-circle bg-white bg-opacity-50 text-black border-none"
            >
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle btn-secondary">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} className="w-full object-cover object-top" />
          <div className="absolute text-white space-y-3 p-12 pt-[167px] bg-gradient-to-r from-black to-[rgba(21, 21, 21, 0)]">
            <h2 className="text-6xl font-extrabold leading-tight">
              Affordable <br /> Price For Car <br /> Servicing
            </h2>
            <p className="w-96 py-5">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex">
              <button className="btn btn-secondary rounded-md mr-5">
                Discover More
              </button>
              <div className="btn btn-outline rounded-md text-white">Latest Project</div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-24 bottom-0 gap-4">
            <a
              href="#slide2"
              className="btn btn-circle bg-white bg-opacity-50 text-black border-none"
            >
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle btn-secondary">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img4} className="w-full object-cover object-top" />
          <div className="absolute text-white space-y-3 p-12 pt-[167px] bg-gradient-to-r from-black to-[rgba(21, 21, 21, 0)]">
            <h2 className="text-6xl font-extrabold leading-tight">
              Affordable <br /> Price For Car <br /> Servicing
            </h2>
            <p className="w-96 py-5">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex">
              <button className="btn btn-secondary rounded-md mr-5">
                Discover More
              </button>
              <div className="btn btn-outline rounded-md text-white">Latest Project</div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-24 bottom-0 gap-4">
            <a
              href="#slide3"
              className="btn btn-circle bg-white bg-opacity-50 text-black border-none"
            >
              ❮
            </a>
            <a href="#slide5" className="btn btn-circle btn-secondary">
              ❯
            </a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
          <img src={img5} className="w-full object-cover object-bottom" />
          <div className="absolute text-white space-y-3 p-12 pt-[167px] bg-gradient-to-r from-black to-[rgba(21, 21, 21, 0)]">
            <h2 className="text-6xl font-extrabold leading-tight">
              Affordable <br /> Price For Car <br /> Servicing
            </h2>
            <p className="w-96 py-5">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex">
              <button className="btn btn-secondary rounded-md mr-5">
                Discover More
              </button>
              <div className="btn btn-outline rounded-md text-white">Latest Project</div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-24 bottom-0 gap-4">
            <a
              href="#slide4"
              className="btn btn-circle bg-white bg-opacity-50 text-black border-none"
            >
              ❮
            </a>
            <a href="#slide6" className="btn btn-circle btn-secondary">
              ❯
            </a>
          </div>
        </div>
        <div id="slide6" className="carousel-item relative w-full">
          <img src={img6} className="w-full object-cover object-bottom" />
          <div className="absolute text-white space-y-3 p-12 pt-[167px] bg-gradient-to-r from-black to-[rgba(21, 21, 21, 0)]">
            <h2 className="text-6xl font-extrabold leading-tight">
              Affordable <br /> Price For Car <br /> Servicing
            </h2>
            <p className="w-96 py-5">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="flex">
              <button className="btn btn-secondary rounded-md mr-5">
                Discover More
              </button>
              <div className="btn btn-outline rounded-md text-white">Latest Project</div>
            </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-24 bottom-0 gap-4">
            <a
              href="#slide5"
              className="btn btn-circle bg-white bg-opacity-50 text-black border-none"
            >
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle btn-secondary">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
