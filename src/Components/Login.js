import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import login from "../assets/login4.png";
import login1 from "../assets/login1.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import { toast } from "react-hot-toast";

const Login = () => {

  const { register, handleSubmit } = useForm();
  const {signIn, googleSignIn} = useContext(AuthContext)
  const [loginError, setLoginError] = useState('')
  const provider = new GoogleAuthProvider();
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/'

  const handelLogin = (data) => {
    console.log(data);
    setLoginError('');
    signIn(data.email, data.password)
    .then(result =>{
      const user = result.user;
      console.log(user);
      navigate(from, {replace:true})
      toast.success("LogIn  Successfully");
    })
    .catch(error =>{
      console.log(error.message)
      setLoginError(error.message)
    })
    
   
  };
  const handelGoogleSignIn = () => {
    googleSignIn(provider)
      .then((result) => {
        const user = result.user;
     
        console.log(user);
      
      })
      .catch((error) => {
        console.error(error);
        setLoginError(error.message);
      });
  };
  

  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 w-4/5 mx-auto  gap-28 mb-10">
        <div className="md:hidden flex justify-center">
          <img className="w-64 h-72" src={login1} alt="" />
        </div>
        <div className="  flex justify-center items-center ">
          <div className="">
            <h2 className="text-2xl flex font-bold tracking-wider ">
              Welcome back
            </h2>
            <p className="tracking-wider text-sm text-slate-600">
              Welcome back! Please enter your details
            </p>

            <form onSubmit={handleSubmit(handelLogin)}>
              <div className="form-control w-full max-w-xs cursor-all-scroll ">
                <label className="label label-text-alt text-sm">Email</label>
                <input
                  type="email"
                  {...register("email",{required:true})}
                  placeholder="Enter Your Email"
                  className="input input-bordered h-10 w-full max-w-xs"
                  required
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label label-text-alt text-sm">
                  Password
                </label>
                <input
                  type="password"
                  {...register("password", {required:true})}
                  placeholder="Enter Your Password"
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
                className="text-lg hover:bg-transparent border hover:border-indigo-900 hover:text-[#22183b] bg-[#22183B] text-white w-full mt-5 rounded-md py-1"
              />
              <div>
                {loginError && <p className="text-red-500 text-sm">{loginError}</p>}
              </div>

              <Link to="/signup">
                <p className="mt-2 text-xs">
                  New to here ?
                  <span className="ml-1 text-[#22183B] font-bold">
                    {" "}
                    Create new Account
                  </span>
                </p>
              </Link>

              <div className="divider">OR</div>

              <button onClick={handelGoogleSignIn} className="btn-outline w-full py-2 border border-[#22183B] rounded-md font-bold">
                Sign in with Google
              </button>
            </form>
          </div>
        </div>
        <div className="rounded-3xl hidden md:block ">
          <img className="rounded-3xl  lg:h-[30rem]" src={login} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
