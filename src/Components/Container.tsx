import { useMediaQuery } from "react-responsive";

interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  const isTablet = useMediaQuery({ minWidth: 1024 });
  return (
    <div
      className={
        isTablet
          ? "   w-[28rem] h-full mt-1 min-h-full flex flex-col"
          : "bg-white w-[90%] mx-auto p-6 rounded-lg transform translate-y-24"
      }
    >
      {children}
    </div>
  );
};

export default Container;
