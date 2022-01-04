import React, { useState, useEffect, useRef } from "react";
import { HiMenu } from "react-icons/hi";
import { Link, Route, Routes } from "react-router-dom";
import { AiFillCloseCircle } from "react-icons/ai";

import { Sidebar, UserProfile } from "../components";
import { client } from "../client";
import logo from "../assets/logo.png";
import Pins from "./Pins";

const Home = () => {
  return <div>Home Page</div>;
};

export default Home;
