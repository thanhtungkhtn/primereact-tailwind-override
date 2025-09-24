import React, { FC } from "react";
import { Button as PrimeButton, ButtonProps } from "primereact/button";

type Props = ButtonProps;

const Button: FC<Props> = ({ title, ...otherProps }) => {
  return (
    <PrimeButton className="bg-primary border-2 rounded-4xl mx-2 active:bg-amber-600 focus:shadow-none" title={title} {...otherProps} >
      {title}
    </PrimeButton>
  );
};

export default Button;
