import React from "react";

// import link
import { Link } from "react-router-dom";

import Layout from "../Layout/Layout";

// import images
import r1img from "../../assets/images/Right side picture.png";
import mentalIMG from "../../assets/images/mentalhealth.svg";
import healthIMG from "../../assets/images/medicine.svg";
import knowIMG from "../../assets/images/knowledge.svg";
import talkIMG from "../../assets/images/talk.svg";

const HomePage = () => {
  return (
    <Layout title={"Home - Interact Me"}>
      {/* Welcome Page */}
      <section>
        <div className="w-full py-20">
          <div className="md:max-w-[1080] m-auto grid md:grid-cols-2">
            {/* text */}
            <div
              data-aos="fade-up-right"
              data-aos-duration="1500"
              className="flex flex-col justify-start gap-4 py-24"
            >
              <h1 className="py-2 md:text-5xl text-4xl font-[700] text-greenColor">
                Know Your Mind <br />
                Heal Your Heart
              </h1>
              <p className="py-2 text-lg text-gray-600">
                Interact, Learn, and Assess your concerns
              </p>

              <Link to="/homepage">
                <button className="flex items-center mt-8 px-8 p-2 gap-2 shadow-lg rounded-lg text-md font-[600] bg-brightColor hover:bg-softColor transition">
                  <i class="ri-search-2-line" />
                  Find Mental Health Support today
                </button>
              </Link>
            </div>

            <img
              alt="none"
              className="floating md:order-last order-first"
              src={r1img}
            />
          </div>
        </div>
      </section>
      {/* Welcome Page end */}

      {/* How Can we support you page */}
      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="text-3xl text-center font-[600]">
              How can we{" "}
              <span className="font-[700] text-brightColor">support you?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            {/* Card 1 */}
            <div
              data-aos="zoom-in-up"
              data-aos-duration="1500"
              className="py-[30px] px-5"
            >
              <div className="flex items-center justify-center">
                <img alt="none" src={mentalIMG} />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[20px] leading-9 text-greenColor font-[700] text-center">
                  I want to check my mental health
                </h2>

                <Link
                  className="w-[44px] h-[44px] rounded-full border border-solid mt-[30px] mx-auto flex items-center justify-center group hover:bg-softColor hover:border-none hover:animate-ping"
                  to="/checkin"
                >
                  <i class="ri-arrow-right-line" />
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div
              data-aos="zoom-in-up"
              data-aos-duration="1500"
              className="py-[30px] px-5"
            >
              <div className="flex items-center justify-center">
                <img alt="none" src={healthIMG} />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[20px] leading-9 text-greenColor font-[700] text-center">
                  I want to find a mental health professional
                </h2>

                <Link
                  className="w-[44px] h-[44px] rounded-full border border-solid mt-[30px] mx-auto flex items-center justify-center group hover:bg-softColor hover:border-none hover:animate-ping"
                  to="/homepage"
                >
                  <i class="ri-arrow-right-line" />
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div
              data-aos="zoom-in-up"
              data-aos-duration="1500"
              className="py-[30px] px-5"
            >
              <div className="flex items-center justify-center">
                <img alt="none" src={knowIMG} />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[20px] leading-9 text-greenColor font-[700] text-center">
                  I want to learn about mental health
                </h2>

                <Link
                  className="w-[44px] h-[44px] rounded-full border border-solid mt-[30px] mx-auto flex items-center justify-center group hover:bg-softColor hover:border-none hover:animate-ping"
                  to="/guide"
                >
                  <i class="ri-arrow-right-line" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* How Can we support you page end */}

      {/* Reach Out */}
      <section>
        <div className="container">
          <div
            data-aos="flip-right"
            data-aos-duration="1500"
            className="flex items-center justify-between flex-col lg:flex-row py-32"
          >
            <div className="xl:w-[670px]">
              <h2 className="text-3xl font-[700] text-brightColor">
                Reach out to <br />
                <span className="text-black">our counselor today</span>
              </h2>

              <Link to="/">
                <button className="flex items-center mt-8 px-8 p-2 gap-2 shadow-lg rounded-lg text-md font-[600] bg-brightColor hover:bg-softColor transition">
                  <i class="ri-chat-4-line" />
                  Chat the counselor
                </button>
              </Link>
            </div>

            {/* img */}
            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img alt="none" className="swing" src={talkIMG} />
            </div>
          </div>
        </div>
      </section>
      {/* Reach Out End */}
    </Layout>
  );
};

export default HomePage;
