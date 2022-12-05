import React, { Ref } from "react";
import { PropsWithChildren } from "react";

type Props = {
  ref: Ref<HTMLDivElement>;
};

const SectionLayout = ({ ref, children }: PropsWithChildren<Props>) => {
  return <div ref={ref}>{children}</div>;
};

export default SectionLayout;
