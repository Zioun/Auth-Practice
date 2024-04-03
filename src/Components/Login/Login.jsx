import React, { useContext } from "react";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';
import { Link, Navigate, useNavigate } from "react-router-dom";
const Login = () => {
  const {loginUser, loginWithGoogle} = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    // const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(name, email, password);

    if(email=="" || password==""){
      toast.error('Input Field can not be empty!')
      return
    }else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
      toast.error('Wrong Email Address!')
      return
    }else if(password.length < 6){
      toast.error('Password must be 6 character!')
      return
    }

    loginUser(email, password)
    .then(()=>{
      toast.success('Login Successfully')
      e.target.reset();
      navigate("/")
    })
    .catch(()=>{
      toast.error('Email or Password not matched!')
    })
  }
  const handleGoogleLogin = () => {
    loginWithGoogle()
    .then(()=>{
      toast.success('Login Successfully')
      navigate("/")
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  return (
    <div>
      <Toaster />
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse w-5/12">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="flex justify-center pt-10 gap-5 text-[20px]">
              <button onClick={handleGoogleLogin} className="border p-2 bg-slate-900 rounded-full text-white"><FaGoogle /></button>
              <button className="border p-2 bg-slate-900 rounded-full text-white"><FaGithub /></button>
              <button className="border p-2 bg-slate-900 rounded-full text-white"><FaTwitter /></button>
              <button className="border p-2 bg-slate-900 rounded-full text-white"><FaFacebook /></button>
            </div>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <button className="btn btn-neutral">Login</button>
              </div>
              <h1>New here? Please <span className="font-bold text-primary"><Link to="/register">Register</Link></span></h1>
            </form>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
