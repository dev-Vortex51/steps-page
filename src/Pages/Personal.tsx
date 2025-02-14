import { useRef } from "react";
import Button from "../Components/Button";
import Container from "../Components/Container";
import InputContainer from "../Components/InputContainer";
import Footer from "../UI/Footer";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Personal = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  function onSubmit() {
    navigate("/plan");
  }

  function handleClick() {
    handleSubmit(onSubmit)();
  }

  return (
    <Container>
      <div className="grow">
        <h1>Personal info</h1>
        <p className="text-cool-gray font-medium">
          Please provide your name, email address, and phone number.
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-3 mt-5"
          ref={formRef}
        >
          <InputContainer
            name="Name"
            type="text"
            placeholder="e.g. Stephen King"
            id="name"
            error={errors.name}
            register={register}
            validation={{
              required: "This field is required",
            }}
          />
          <InputContainer
            name="Email Address"
            type="email"
            placeholder="e.g. stephenking@lorem.com"
            id="email"
            error={errors.email}
            register={register}
            validation={{
              required: "This field is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email format",
              },
            }}
          />
          <InputContainer
            name="Phone Number"
            type="tel"
            placeholder="e.g. +1 234 567 890"
            id="phone"
            error={errors.phone}
            register={register}
            validation={{
              required: "This field is required",
            }}
          />
        </form>
      </div>
      <Footer>
        <div className="flex items-center justify-end w-full">
          <Button type="next" onClick={handleClick}>
            Next Step
          </Button>
        </div>
      </Footer>
    </Container>
  );
};

export default Personal;
