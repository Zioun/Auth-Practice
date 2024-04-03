import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast, { Toaster } from 'react-hot-toast';
import { Link } from "react-router-dom";
const Register = () => {
  const {createUser} = useContext(AuthContext)
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);

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

    createUser(email, password)
    .then(()=>{
      toast.success('Registration Successfully')
      e.target.reset();
    })
    .catch(()=>{
      toast.error('Email already in use!')
    })


  }
  return (
    <div>
      <Toaster />
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse w-5/12">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered"
                />
              </div>
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
              </div>
              {/* <div className="form-control">
              <label className="label">
                  <span className="label-text">Profile Image</span>
                </label>
                <input type="file" name="image" className="file-input file-input-bordered w-full max-w-xs" />
              </div> */}
              <div className="form-control mt-6">
                <button className="btn btn-neutral">Registration</button>
              </div>
              <h1>Already have account? Please <span className="font-bold text-primary"><Link to="/login">Login</Link></span></h1>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
