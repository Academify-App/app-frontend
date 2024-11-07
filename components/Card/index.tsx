import React, { ReactElement } from "react";
import { View } from "react-native";

interface CardProps {
  children: ReactElement;
  className?: string;
}

const Card = React.forwardRef(function Card(
  { children, className, ...props }: CardProps,
  ref
) {
  return (
    <View
      ref={ref}
      className={`shadow-[0px_4px_8px_0px_#0000000F_0px_0px_4px_0px_#0000000A] border-[0.3px] border-[#FF3E6C1F] w-full p-[14px] rounded-xl bg-white flex flex-col ${className}`}
      {...props}
    >
      {children}
    </View>
  );
});

export default Card;
