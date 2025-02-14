import { useMediaQuery } from "react-responsive";
import { Plan, useAppContext } from "../Contexts/AppContext";
import { formatCurrency } from "../Utils/helper";

interface PlanBoxProps {
  plan: Plan;
  isSelected: boolean;
  onSelect: () => void;
}

const PlanBox = ({ plan, onSelect, isSelected }: PlanBoxProps) => {
  const { isToggled } = useAppContext();
  const isTablet = useMediaQuery({ minWidth: 1024 });
  return (
    <div
      className={`flex items-center gap-2  border border-cool-gray py-4 px-5 mt-2  rounded-lg  cursor-pointer    ${isSelected && "border-purplish bg-alabaster"} ${isTablet ? "w-[9rem] flex-col items-start" : "w-full"}`}
      tabIndex={0}
      onClick={onSelect}
    >
      <img src={plan.svg} alt="" />
      <div>
        <h2>{plan.name}</h2>
        <p className="text-cool-gray font-medium">
          {formatCurrency(!isToggled ? plan.priceMonthly : plan.priceYearly)}/
          {!isToggled ? "mo" : "yr"}
        </p>
        {isToggled && <p className="text-marine">2 months free</p>}
      </div>
    </div>
  );
};

export default PlanBox;
