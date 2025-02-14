import Container from "../Components/Container";
const Confirmation = () => {
  return (
    <Container>
      <div className="flex flex-col gap-2 items-center mt-10 py-12">
        <img src="/icon-thank-you.svg" alt="" />
        <h1>Thank you!</h1>
        <p className="font-medium text-cool-gray  text-center">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com{" "}
        </p>
      </div>
    </Container>
  );
};

export default Confirmation;
