import { useNavigate } from "react-router-dom";
import Container from "../Components/Container";
import PlanBox from "../Components/PlanBox";
import Toggle from "../Components/Toggle";
import { useAppContext } from "../Contexts/AppContext";
import Footer from "../UI/Footer";
import type { Plan } from "../Contexts/AppContext";
import Button from "../Components/Button";
import { useMediaQuery } from "react-responsive";

const Plan = () => {
  const { plans, setPlans } = useAppContext();
  const navigate = useNavigate();
  const isTablet = useMediaQuery({ minWidth: 1024 });

  function handleSelectPlan(planId: number) {
    setPlans((prev) =>
      prev.map((item) => ({ ...item, chosen: item.id === planId }))
    );
  }

  function handleNextStep() {
    const isSelected = plans.some((plan) => plan.chosen);
    console.log(isSelected);
    if (isSelected) {
      navigate("/add-on");
    } else {
      alert("Please select a plan before proceeding.");
    }
  }

  function handleGoBack() {
    navigate(-1);
  }

  return (
    <Container>
      <div className=" grow">
        <h1>Select your plan</h1>
        <p className="text-cool-gray font-medium">
          You have the option of monthly and yearly billing
        </p>
        <div className={`mt-5 flex flex-wrap justify-between w-full  `}>
          {plans.map((plan) => (
            <PlanBox
              key={plan.id}
              plan={plan}
              isSelected={plan.chosen}
              onSelect={() => handleSelectPlan(plan.id)}
            />
          ))}
        </div>
        <Toggle />
      </div>
      <Footer>
        <Button type="back" onClick={handleGoBack}>
          Go Back
        </Button>
        <Button type="next" onClick={handleNextStep}>
          Next Step
        </Button>
      </Footer>
    </Container>
  );
};

export default Plan;
