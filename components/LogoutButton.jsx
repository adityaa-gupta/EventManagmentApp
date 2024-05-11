"use client";

import useAuth from "@hooks/useAuth";
import React from "react";
import {
  HiArrowDownCircle,
  HiArrowLeftStartOnRectangle,
} from "react-icons/hi2";

const LogoutButton = () => {
  const { signOut } = useAuth();
  return (
    <HiArrowLeftStartOnRectangle className="text-blue-500" onClick={signOut} />
  );
};

export default LogoutButton;
{
  /* <HiArrowLeftStartOnRectangle /> */
}
