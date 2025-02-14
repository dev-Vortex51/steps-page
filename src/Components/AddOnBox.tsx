import { Add, useAppContext } from "../Contexts/AppContext";
import { formatCurrency } from "../Utils/helper";

interface AddOnBoxProps {
  item: Add;
  onSelect: () => void;
}
const AddOnBox = ({ item, onSelect }: AddOnBoxProps) => {
  const { isToggled } = useAppContext();
  return (
    <div
      className={`grid grid-cols-[auto_1fr_auto] items-center gap-[1rem] w-full px-3 py-3 border mt-2 rounded-lg border-cool-gray   ${item.chosen ? "bg-alabaster border-purplish" : ""} `}
      onClick={onSelect}
    >
      <div>
        <input
          type="checkbox"
          id={`checkbox-${item.id}`}
          className="hidden"
          checked={item.chosen}
        />
        <label
          htmlFor={`checkbox-${item.id}`}
          className="custom-checkbox  p-1 rounded-lg w-5 h-5 flex items-center justify-center"
        >
          <img src="/public/icon-checkmark.svg" alt="" className="hidden" />
        </label>
      </div>
      <div>
        <h2 className="text-sm">{item.name}</h2>
        <p className="text-[0.9rem] text-cool-gray font-medium">
          {item.description}
        </p>
      </div>
      <p className="text-[0.9rem] text-purplish font-semibold">
        +{formatCurrency(!isToggled ? item.perMonth : item.perYear)}/
        {!isToggled ? "mo" : "yr"}
      </p>
    </div>
  );
};

export default AddOnBox;
