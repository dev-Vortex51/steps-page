import { useNavigate } from "react-router-dom";
import { useAppContext } from "../Contexts/AppContext";
import { formatCurrency } from "../Utils/helper";

const CheckoutBox = () => {
  const { plans, isToggled, addOn } = useAppContext();
  const selectedPlan = plans.find((plan) => plan.chosen);
  const navigate = useNavigate();

  function handleChangeClick() {
    navigate("/plan");
  }

  return (
    <div className="bg-magnolia w-full p-4 flex flex-col gap-1 rounded-md mt-6">
      <div className="flex items-center justify-between pb-4 border-b border-light-gray">
        <div>
          <h2>
            {selectedPlan?.name} ({!isToggled ? "Monthly" : "Yearly"})
          </h2>
          <p
            className="text-cool-gray font-medium underline cursor-pointer"
            onClick={handleChangeClick}
          >
            Change
          </p>
        </div>
        <p className="text-[0.9rem] text-marine font-semibold">
          {formatCurrency(
            isToggled
              ? (selectedPlan?.priceYearly ?? 0)
              : (selectedPlan?.priceMonthly ?? 0)
          )}
          /{isToggled ? "yr" : "mo"}
        </p>
      </div>
      {addOn
        .filter((item) => item.chosen)
        .map((item) => (
          <div key={item.id} className="flex items-center justify-between mt-2">
            <p className="text-cool-gray font-medium">{item.name}</p>
            <p className="text-sm text-marine font-medium">
              +{formatCurrency(isToggled ? item.perYear : item.perMonth)}/
              {isToggled ? "yr" : "mo"}
            </p>
          </div>
        ))}
    </div>
  );
};

export default CheckoutBox;
