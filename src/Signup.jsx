import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "react-router-dom";

const Signup = () => {
  let navigate = useNavigate();
  const auth = getAuth();
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [firstNameer, setFirstNameer] = useState("");
  let [lastNameer, setLastNameer] = useState("");
  let [emailer, setEmailer] = useState("");
  let [passworder, setPassworder] = useState("");

  let h_Fname = (e) => {
    setFirstName(e.target.value);
    setFirstNameer("");
  };
  let h_lname = (e) => {
    setLastName(e.target.value);
    setLastNameer(" ");
  };
  let h_email = (e) => {
    setEmail(e.target.value);
    setEmailer("");
  };
  let h_password = (e) => {
    setPassword(e.target.value);
    setPassworder("");
  };

  let h_submit = () => {
    if (!firstName) {
      setFirstNameer("First Name Required");
    }
    if (!lastName) {
      setLastNameer("last Name Required");
    }
    if (!email) {
      setEmailer("Email is Required");
    }
    if (!password) {
      setPassworder("password is Required");
    }
    if (firstName && lastName && email && password) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((user) => {
          navigate("/");
        })
        .catch((error) => {
          console.log(error.code);
        });
    }
  };
  return (
    <div>
      <div className="flex justify-between items-center ">
        <div className="ml-[460px] mt-[190px]">
          <h1 className="font-roboto text-[65px] font-semibold text-[#1877f2]">
            facebook
          </h1>
          <h6 className="font-roboto text-black text-[22px] font-normal w-[445px]">
            Facebook helps you connect and share with the people in your life.
          </h6>
        </div>
        <div className="mr-[505px] p-[20px] bg-[#fff] shadow-lg rounded-[8px] mt-[200px] ">
          <div>
            <input
              onChange={h_Fname}
              className="w-[415px] py-[15px] outline-none border border-1  border-[#D9D9D9] rounded-[5px] px-[15px]"
              type="text"
              placeholder="First Name"
            />
            {firstNameer && <p>{firstNameer}</p>}
          </div>
          <div className="mt-[15px]">
            <input
              onChange={h_lname}
              className="w-[415px] py-[15px] outline-none border border-1  border-[#D9D9D9] rounded-[5px] px-[15px]"
              type="text"
              placeholder="Last Name"
            />
            {lastNameer && <p>{lastNameer}</p>}
          </div>
          <div className="mt-[15px]">
            <input
              onChange={h_email}
              className="w-[415px] py-[15px] outline-none border border-1  border-[#D9D9D9] rounded-[5px] px-[15px]"
              type="email"
              placeholder="Email Address"
            />
            {emailer && <p>{emailer}</p>}
          </div>

          <div className="mt-[15px] mb-[28px]">
            <input
              onChange={h_password}
              className="w-[415px] py-[15px] outline-none border border-1  border-[#D9D9D9] rounded-[5px] px-[15px] "
              type="password"
              placeholder="Password"
            />
            {emailer && <p>{emailer}</p>}
          </div>
          <div className=" mt-20px  mb-[25px]">
            <Link
              onClick={h_submit}
              className=" text-[#fff] font-bold text-[18px] rounded-[5px] bg-[#1877F2] py-[14px] px-44 "
            >
              SIgn Up
            </Link>
          </div>
          <div className="mb-[40px] ">
            <Link className="pl-[130px]  text-[#1877F2] font-semibold ">
              Forgotten password?
            </Link>
          </div>
          <div className="w-[400px] mb-[15px]">
            <Link className="ml-[98px] bg-[#36A420] text-[#fff] px-[20px] py-[14px] text-[18px] font-bold rounded-[5px]">
              Create New Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
