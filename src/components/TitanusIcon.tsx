import React from "react";

interface TitanusIconProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
}

export default function TitanusIcon({ className = "w-8 h-8", ...props }: TitanusIconProps) {
  return (
    <img
      src="https://res.cloudinary.com/du3y0n9fx/image/upload/v1782325176/titanus.jpg"
      alt="Titanus Logo"
      className={`${className} object-cover rounded-full border border-white/10`}
      referrerPolicy="no-referrer"
      {...props}
    />
  );
}
