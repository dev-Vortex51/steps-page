import { useAppContext } from "../Contexts/AppContext";

const Toggle = () => {
  const { isToggled, setIsToggled } = useAppContext();
  return (
    <div className="w-full flex justify-center items-center space-x-4 mt-6 p-3 bg-alabaster rounded-md">
      <p
        className={`${isToggled ? "text-cool-gray" : "text-marine"} font-bold`}
      >
        Monthly
      </p>
      <span>
        <label className="toggle-switch">
          <input
            type="checkbox"
            checked={isToggled}
            onChange={() => setIsToggled(!isToggled)}
          />
          <span className="switch" />
        </label>
      </span>
      <p
        className={`${isToggled ? "text-marine" : "text-cool-gray"} font-bold`}
      >
        Yearly
      </p>
    </div>
  );
};

export default Toggle;
