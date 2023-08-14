import { DynamicContent } from "@/types";
import StepperNavigation from "./StepperNavigation";

const Default = ({
  currentStep,
  nextStep,
  prevStep,
  data,
  setData,
}: DynamicContent) => {
  return (
    <>
      <h1 className="section-title">Let’s start planning your trip</h1>
      <p className="section-desc max-w-lg">
        Share your travel preferences then select an expert with intimate
        knowledge of your destination to plan your next getaway.
      </p>
      <StepperNavigation
        currentStep={currentStep}
        nextStep={nextStep}
        prevStep={prevStep}
        setData={setData}
      />
    </>
  );
};

export default Default;
