"use client";
import React, { useState } from "react";
import { Dialog, DialogContent } from "../ui/dialog";
import RegisterForm from "@/app/projects/RegisterForm";

const RegisterButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-primary text-base px-5 py-2 rounded-none text-white w-fit"
      >
        Register Now
      </button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="b p-0">
          <RegisterForm close={() => setIsOpen(false)} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default RegisterButton;
