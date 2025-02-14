import { useNavigate } from "react-router-dom";
import Button from "../Components/Button";
import CheckoutBox from "../Components/CheckoutBox";
import Container from "../Components/Container";
import Footer from "../UI/Footer";
import { useAppContext } from "../Contexts/AppContext";
import { formatCurrency } from "../Utils/helper";

const Checkout = () => {
  const { plans, addOn, isToggled } = useAppContext();
  const selectedPlan = plans.find((plan) => plan.chosen);
  const navigate = useNavigate();

  const total =
    (selectedPlan
      ? isToggled
        ? selectedPlan.priceYearly
        : selectedPlan.priceMonthly
      : 0) +
    addOn
      .filter((item) => item.chosen)
      .reduce(
        (acc, item) => acc + (isToggled ? item.perYear : item.perMonth),
        0
      );

  function handleNextStep() {
    navigate("/confirmation");
  }

  function handleGoBack() {
    navigate(-1);
  }

  return (
    <Container>
      <div>
        <h1>Finishing up</h1>
        <p className="text-cool-gray font-medium">
          Double-check everything looks OK before confirming.
        </p>
        <CheckoutBox />
        <div className="flex items-center justify-between mt-6 px-4">
          <p className="text-cool-gray font-medium">
            Total ({isToggled ? "per year" : "per month"})
          </p>
          <h2 className="text-purplish">
            {formatCurrency(total)}/{isToggled ? "yr" : "mo"}
          </h2>
        </div>
      </div>
      <Footer>
        <Button type="back" onClick={handleGoBack}>
          Go Back
        </Button>
        <Button type="confirm" onClick={handleNextStep}>
          Confirm
        </Button>
      </Footer>
    </Container>
  );
};

export default Checkout;
