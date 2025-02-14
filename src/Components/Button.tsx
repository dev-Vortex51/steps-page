interface ButtonProps {
  children: React.ReactNode;
  type: string;
  onClick: () => void;
}

const Button = ({ children, type, onClick }: ButtonProps) => {
  let buttonType;

  switch (type) {
    case "next":
      buttonType =
        "w-[6.5rem] bg-marine text-white rounded-sm py-3 px-2 font-medium cursor-pointer text-center";
      break;
    case "back":
      buttonType =
        "w-[6rem] bg-transparent text-cool-gray rounded-sm py-3 px-2 font-bold cursor-pointer text-center";
      break;
    case "confirm":
      buttonType =
        "w-[6.5rem] bg-purplish text-white rounded-sm py-3 px-2 font-medium cursor-pointer text-center";
      break;
    default:
      buttonType = "";
  }

  return (
    <button onClick={onClick} className={buttonType}>
      {children}
    </button>
  );
};

export default Button;
