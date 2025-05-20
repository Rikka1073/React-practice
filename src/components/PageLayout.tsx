import type { ReactNode } from "react";
import Header from "./Header";

type PageLayoutProps = {
  children: ReactNode;
  data: string;
};

const PageLayout = ({ children, data }: PageLayoutProps) => {
  console.log(data);
  return (
    <>
      <Header data={data} />
      {children}
    </>
  );
};

export default PageLayout;
