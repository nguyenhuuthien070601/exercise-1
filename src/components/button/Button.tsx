import React from "react";
import spin from "../../../public/spin.svg";
import Image from "next/image";
import { AiFillHeart } from "react-icons/ai";
type ButtonVariants = "primary" | "secondary" | "danger" | "pink";
type ButtonSizes = "sm" | "md" | "lg" | "xl";
type TIcon = "heart";
type Tloading = "true";
const displayLoading: Record<Tloading, string> = {
  true: "lds-dual-ring",
};
const buttonVariants: Record<ButtonVariants, string> = {
  secondary: "bg-blue-500",
  danger: "bg-red-500",
  primary: "bg-violet-500",
  pink: "bg-pink-500",
};
type ButtonProps = {
  title: string;
  variant: "primary" | "secondary" | "danger" | "pink";
  size?: "sm" | "md" | "lg" | "xl";
  icon?: "heart";
  isLoading?: boolean;
};
const buttonSizes: Record<ButtonSizes, string> = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
};

const displayIcon: Record<TIcon, React.ReactNode> = {
  heart: <AiFillHeart />,
};
const Button = (props: ButtonProps) => {
  const { title, variant, size, icon, isLoading } = props;

  return (
    <button
      className={`flex gap-5 items-center justify-center p-5 text-white rounded-lg m-5 ${
        buttonVariants[variant]
      } ${buttonSizes[size || "sm"]} ${isLoading && "opacity-50"}`}
    >
      {!isLoading && title} {icon && displayIcon[icon]}
      {isLoading && <Image src={spin} alt="spin" className="animate-spin" />}
    </button>
  );
};

export default Button;
