import React from "react";

type Props = {
  space: boolean;
  letter: string;
};

const Letter = ({ letter, space }: Props) => {
  return space == true ? (
    <div className="text">&nbsp;</div>
  ) : (
    <div className="text text-white text-3xl font-bold" >
      {letter}
    </div>
  );
};

export default Letter;
