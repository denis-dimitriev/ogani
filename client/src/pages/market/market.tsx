import { Outlet } from "react-router-dom";

const Market = () => {
  return (
    <div className="container">
      <h1>Market</h1>
      <Outlet />
    </div>
  );
};

export default Market;
