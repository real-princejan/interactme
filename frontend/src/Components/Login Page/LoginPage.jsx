import React from "react";
import "./Login.css";
// import Link
import { Link } from "react-router-dom";

// import components
import manIMG from "../../assets/images/man falling.png";

export const LoginPage = () => {
  return (
    <>
      <section className="h-full max-h-[1920px] xl:mb-24 ml-2">
        <div className="flex flex-col lg:flex-row">
          <div
            data-aos="fade-left"
            data-aos-duration="1500"
            className="lg:ml-10 xl:ml-1 flex flex-col items lg:text-left justify-center px-4 lg:px-0 gap-8"
          >
            <h1 className="font-[800] text-4xl">
              <span>Embrace your journey towards well-being.</span>
            </h1>
            <p className="font-[700]">
              if you don’t an account <br /> you can{" "}
              <Link
                className="text-greenColor hover:animate-pulse"
                to="/Register"
              >
                Register Here!
              </Link>
            </p>
          </div>

          {/* Image */}
          <div
            data-aos="fade-right"
            data-aos-duration="1500"
            className="flex w-[500] ml-30 justify-center items-center"
          >
            <img className="floating" src={manIMG} alt="" />
          </div>
          {/* End Image */}

          {/* Form */}
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            className="grid grid-cols-1 sm:grid-cols-2 px-12 "
          >
            <form>
              <div className="flex flex-col mt-20 gap-4 min-w-fit">
                <input
                  className="font-[400] border p-3 py-2 w-80 rounded-lg bg-transparent text-sm hover:bg-insideColor"
                  type="email"
                  placeholder="Enter Email"
                  required
                />
                <input
                  className="font-[400] border p-3 py-2 w-80 rounded-lg bg-transparent text-sm hover:bg-insideColor"
                  type="password"
                  placeholder="◦◦◦◦◦◦◦◦"
                  required
                />
                <button className="border bg-greenColor mt-2 p-1 rounded-lg text-sm font-[700] text-white hover:text-white hover:animate-pulse transition">
                  Login
                </button>
              </div>
            </form>
          </div>
          {/* End Form */}
        </div>
      </section>
    </>
  );
};

export default LoginPage;
