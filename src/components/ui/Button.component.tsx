import React from "react";
import styles from "./Button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <button className={`${styles.button} ${className || ""}`} {...props}>
      {children}
    </button>
  );
};
