"use client";
import { SignInButton } from "@clerk/nextjs";
import React from "react";

const SignInButtonComponent = () => {
  return (
    <SignInButton mode="modal">
      <button className="text-sm font-semibold hover:text-darkColor hoverEffect hover:cursor-pointer">
        Login
      </button>
    </SignInButton>
  );
};

export default SignInButtonComponent;
