import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./home";
import {Login} from "./login";
import {CreateAccount} from "./createAccount";
import React from "react";
import {ForgetPassword} from "./forgetPassword";

export const PageProvider = () => {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/login"} element={<Login/>}/>
        <Route path={"/createAccount"} element={<CreateAccount/>}/>
        <Route path={"/forgetPassword"} element={<ForgetPassword/>}/>
      </Routes>
    </BrowserRouter>
  </>
}