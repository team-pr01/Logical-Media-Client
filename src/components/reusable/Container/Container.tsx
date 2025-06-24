import type { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="max-w-[1280px] mx-auto w-full px-5 2xl:px-0">{children}</div>
  );
};

export default Container;
