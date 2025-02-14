import { useMediaQuery } from "react-responsive";

interface FooterProps {
  children: React.ReactNode;
}

const Footer = ({ children }: FooterProps) => {
  const isTablet = useMediaQuery({ minWidth: 1024 });
  return (
    <footer
      className={`w-full flex items-center mt-auto justify-between  h-17  py-3 ${isTablet ? "px-0 bg-transparent" : "px-4 bg-white absolute  left-0"} `}
    >
      {children}
    </footer>
  );
};

export default Footer;
