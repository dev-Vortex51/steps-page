import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import { useMediaQuery } from "react-responsive";

const AppLayout = () => {
  const isTablet = useMediaQuery({ minWidth: 1024 });
  return (
    <div
      className={
        isTablet
          ? "w-[65%] bg-white mx-auto h-[30rem] mt-20 p-3.5 pr-9 flex  gap-[4rem] rounded-lg"
          : ""
      }
    >
      <Nav />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
