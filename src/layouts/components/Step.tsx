"use client";

const Step = ({
  label,
  step,
  currentStep,
}: {
  label: string;
  step: number;
  currentStep: number;
}) => {
  return (
    <div className={`stepper-step ${step <= currentStep ? "active" : ""}`}>
      <div className={`stepper-serail`}>
        <span className="relative z-20">{step}</span>
      </div>
      <p className="stepper-label">{label}</p>
    </div>
  );
};

export default Step;
