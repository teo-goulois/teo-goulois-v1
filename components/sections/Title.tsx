import React from "react";

type Props = {
  title: string;
  number: string | number;
};

const Title = ({ title, number }: Props) => {
  return (
    <div
      className={`flex items-center w-full  py-4 font-Lexend-Zetta uppercase`}
    >
      <div className={`flex items-center font-bold text-lg lg:text-2xl `}>
        <p className={`gradient`}>{number}.&nbsp;</p>
        <p className={``}>{title}</p>
      </div>
      <div className={`border ml-4 flex-1 relative h-[2px]`} />
    </div>
  );
};

export default Title;
