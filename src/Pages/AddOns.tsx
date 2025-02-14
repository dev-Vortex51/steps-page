import { useNavigate } from "react-router-dom";
import AddOnBox from "../Components/AddOnBox";
import Button from "../Components/Button";
import Container from "../Components/Container";
import { useAppContext } from "../Contexts/AppContext";
import Footer from "../UI/Footer";

const AddOns = () => {
  const { addOn, setAddOn } = useAppContext();
  const navigate = useNavigate();

  function handleSelectAddOn(addOnId: number) {
    setAddOn((prev) =>
      prev.map((item) =>
        item.id === addOnId ? { ...item, chosen: !item.chosen } : item
      )
    );
  }

  function handleNextStep() {
    const hasSelectedAddOn = addOn.some((item) => item.chosen);
    if (hasSelectedAddOn) {
      navigate("/checkout");
    } else {
      alert("Please select at least one add-on before proceeding.");
    }
  }

  function handleGoBack() {
    navigate(-1);
  }

  return (
    <Container>
      <div>
        <h1>Pick add-ons</h1>
        <p className="text-cool-gray font-medium">
          Add-ons help enhance your gaming experience.
        </p>
        <div>
          {addOn.map((item) => (
            <AddOnBox
              key={item.id}
              item={item}
              onSelect={() => handleSelectAddOn(item.id)}
            />
          ))}
        </div>
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

export default AddOns;
