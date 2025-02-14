/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

export interface Plan {
  id: number;
  name: string;
  priceMonthly: number;
  priceYearly: number;
  svg: string;
  chosen: boolean;
}

export interface Add {
  id: number;
  name: string;
  description: string;
  perMonth: number;
  perYear: number;
  chosen: boolean;
}

interface ContextProps {
  isToggled: boolean;
  setIsToggled: (value: boolean) => void;
  plans: Plan[];
  setPlans: React.Dispatch<React.SetStateAction<Plan[]>>;
  addOn: Add[];
  setAddOn: React.Dispatch<React.SetStateAction<Add[]>>;
  path: string;
  setPath: React.Dispatch<React.SetStateAction<string>>;
}

interface ProviderProps {
  children: React.ReactNode;
}

const AppContext = createContext<ContextProps | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

const AppProvider = ({ children }: ProviderProps) => {
  const [isToggled, setIsToggled] = useState(false);
  const [path, setPath] = useState("");
  const [plans, setPlans] = useState([
    {
      id: 1,
      name: "Arcade",
      priceMonthly: 9,
      priceYearly: 90,
      svg: "/public/icon-arcade.svg",
      chosen: false,
    },
    {
      id: 2,
      name: "Advanced",
      priceMonthly: 12,
      priceYearly: 120,
      svg: "/public/icon-advanced.svg",
      chosen: false,
    },
    {
      id: 3,
      name: "Pro",
      priceMonthly: 15,
      priceYearly: 150,
      svg: "/public/icon-pro.svg",
      chosen: false,
    },
  ]);

  const initialAddOns = [
    {
      id: 1,
      name: "Online Service",
      description: "Access to multiplayer games",
      perMonth: 1,
      perYear: 10,
      chosen: false,
    },
    {
      id: 2,
      name: "Larger Storage",
      description: "Extra 1TB of cloud save",
      perMonth: 2,
      perYear: 20,
      chosen: false,
    },
    {
      id: 3,
      name: "Customizable Profile",
      description: "Custom theme on your profile",
      perMonth: 2,
      perYear: 20,
      chosen: false,
    },
  ];

  const [addOn, setAddOn] = useState<Add[]>(initialAddOns);

  return (
    <AppContext.Provider
      value={{
        isToggled,
        setIsToggled,
        plans,
        setPlans,
        addOn,
        setAddOn,
        path,
        setPath,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
