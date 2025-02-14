import { useMediaQuery } from "react-responsive";
import { useAppContext } from "../Contexts/AppContext";

const Nav = () => {
  const isTablet = useMediaQuery({ minWidth: 1024 });
  const { path } = useAppContext();
  return (
    <aside
      className={isTablet ? "h-full relative flex" : "absolute z-[-1] w-full"}
    >
      <img
        className={isTablet ? "h-full" : "w-full"}
        src={isTablet ? "/bg-sidebar-desktop.svg" : "/bg-sidebar-mobile.svg"}
        alt=""
      />
      <div
        className={
          isTablet
            ? "flex flex-col gap-7 absolute mt-6 ml-5"
            : "flex items-center justify-center absolute top-9 w-full mx-auto gap-7 "
        }
      >
        <div className="flex items-start gap-4">
          <span
            className={`border border-white font-semibold w-10 h-10 rounded-full flex items-center justify-center ${
              path === "/personal"
                ? "bg-light text-marine border-light"
                : "bg-transparent text-white border-white"
            }`}
          >
            1
          </span>
          <div className={isTablet ? "" : "hidden"}>
            <h2 className="text-sm text-cool-gray font-semibold">STEP 1</h2>
            <h1 className="text-medium tracking-wide text-white">YOUR INFO</h1>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <span
            className={`border font-semibold w-10 h-10 rounded-full flex items-center justify-center ${
              path === "/plan"
                ? "bg-light text-marine border-light"
                : "bg-transparent text-white border-white"
            }`}
          >
            2
          </span>
          <div className={isTablet ? "" : "hidden"}>
            <h2 className="text-sm text-cool-gray font-semibold">STEP 2</h2>
            <h1 className="text-medium tracking-wide text-white">
              SELECT PLAN
            </h1>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <span
            className={`border font-semibold w-10 h-10 rounded-full flex items-center justify-center ${
              path === "/add-on"
                ? "bg-light text-marine border-light"
                : "bg-transparent text-white border-white"
            }`}
          >
            3
          </span>
          <div className={isTablet ? "" : "hidden"}>
            <h2 className="text-sm text-cool-gray font-semibold">STEP 3</h2>
            <h1 className="text-medium tracking-wide text-white">ADD-ONS</h1>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <span
            className={`border font-semibold w-10 h-10 rounded-full flex items-center justify-center ${
              path === "/checkout" || path === "/confirmation"
                ? "bg-light text-marine border-light"
                : "bg-transparent text-white border-white"
            }`}
          >
            4
          </span>
          <div className={isTablet ? "" : "hidden"}>
            <h2 className="text-sm text-cool-gray font-semibold">STEP 4</h2>
            <h1 className="text-medium tracking-wide text-white">SUMMARY</h1>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Nav;
