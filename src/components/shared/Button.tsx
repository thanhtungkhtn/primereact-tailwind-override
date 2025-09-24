import React from "react";
import { Button as PrimeButton } from "primereact/button";

import { Message } from 'primereact/message';
import { InputText } from 'primereact/inputtext';

const Button = () => {
  return (
    <PrimeButton className="bg-amber-800 border-2 rounded-4xl">
      <Message text="Prime React with tailwind" className="text-red-500 bg-amber-300" />
      <InputText className="border-2 rounded-4xl" />
    </PrimeButton>
  );
};

export default Button;
