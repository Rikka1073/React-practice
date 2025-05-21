import { useContext } from "react";
import { CatContext } from "../App";

const Header = ({ data }) => {
  const value = useContext(CatContext);

  return (
    <>
      <div>{data}</div>
      <div>{value}</div>
    </>
  );
};

export default Header;
