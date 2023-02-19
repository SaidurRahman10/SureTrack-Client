import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import login from "../assets/signup.png";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import { toast } from "react-hot-toast";

const Signup = () => {
  const { register, handleSubmit } = useForm();
  const { createUser, updateUser } = useContext(AuthContext);
  const [signUpError, setSignUpError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";






  const handelSignUp = (data) => {
    setSignUpError("");
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
        toast.success("User Created  Successfully");

        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {
            navigate('/')
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        console.log(error);
        setSignUpError(error.message);
      });
  };

  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 w-4/5 mx-auto  gap-28 mb-10">
        <div className="md:hidden flex justify-center">
          <img className="w-72 h-72" src={login} alt="" />
        </div>
        <div className="  flex justify-center items-center ">
          <div className="">
            <h2 className="text-3xl flex font-bold tracking-wider ">
              Welcome to Family
            </h2>
            <p className="tracking-wider text-slate-600">
              Create an Account! Please enter your details
            </p>

            <form onSubmit={handleSubmit(handelSignUp)}>
              <div className="form-control w-full max-w-xs cursor-all-scroll ">
                <label className="label label-text-alt text-sm">Name</label>
                <input
                  type="text"
                  {...register("Name", { required: true })}
                  placeholder="Your Name"
                  className="input input-bordered h-10 w-full max-w-xs"
                  required
                />
              </div>
              <div className="form-control w-full max-w-xs cursor-all-scroll ">
                <label className="label label-text-alt text-sm">Email</label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Your Email"
                  className="input input-bordered h-10 w-full max-w-xs"
                  required
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label label-text-alt text-sm">Password</label>
                <input
                  type="password"
                  {...register("password", { required: true })}
                  placeholder="Password"
                  className="input input-bordered h-10 w-full max-w-xs"
                  required
                />
              </div>
              <a href="/">
                <p className="text-xs mt-2 text-[#22183B] font-bold">
                  Forget Password !!
                </p>
              </a>

              <input
                type="submit"
                className="text-lg hover:bg-transparent border hover:border-sky-500 hover:text-sky-500 bg-sky-500 text-white w-full mt-5 rounded-md py-1"
              />
              <div>
                {signUpError && (
                  <p className="text-red-500 text-sm">{signUpError}</p>
                )}
              </div>

              <Link to="/login">
                <p className="mt-2 text-xs">
                  Already have Account?
                  <span className="ml-1 text-[#22183B] font-bold">
                    {" "}
                    Click here
                  </span>
                </p>
              </Link>

              <div className="divider">OR</div>

              <button className="btn-outline w-full py-2 border border-[#22183B] rounded-md font-bold">
                Sign in with Google
              </button>
            </form>
          </div>
        </div>
        <div className="rounded-3xl hidden md:block ">
          <img className="rounded-3xl   " src={login} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
