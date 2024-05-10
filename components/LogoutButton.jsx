"use client";

import useAuth from "@hooks/useAuth";
import React from "react";
import { HiArrowDownCircle } from "react-icons/hi2";

const LogoutButton = () => {
  const { signOut } = useAuth();
  return <HiArrowDownCircle className="text-blue-500" onClick={signOut} />;
};

export default LogoutButton;
