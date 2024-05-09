import { ReactNode } from "react";

function Container({ children }: { children: ReactNode }) {
  return <div className="mx-auto h-full max-w-screen-xl">{children}</div>;
}

export default Container;
