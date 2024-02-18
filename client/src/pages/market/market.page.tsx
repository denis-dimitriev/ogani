import { Outlet } from "react-router-dom";

const MarketPage = () => {
  return (
    <div className="container">
      <h1>Market</h1>
      <Outlet />
    </div>
  );
};

export default MarketPage;
