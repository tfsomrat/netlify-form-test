import { useForm } from "@/hooks/useForm";
import { DynamicContent } from "@/types";
import StepperNavigation from "./StepperNavigation";

const initialState = [
  {
    label: "Romantic",
  },
];

const Extra = ({
  currentStep,
  nextStep,
  prevStep,
  data,
  setData,
}: DynamicContent) => {
  const { formData, isError } = useForm<{ label: string }[]>({
    initialState,
    key: "extra",
  });

  return (
    <>
      <div className="inline max-w-[98px] text-center text-white font-medium flex-none bg-yellow-500 rounded p-1">
        Optional
      </div>
      <h2 className="section-title-sm mt-4">What’s your travel vibe?</h2>

      <StepperNavigation
        currentStep={currentStep}
        nextStep={nextStep}
        prevStep={prevStep}
        setData={setData}
        data={data}
        indivisualFormData={formData}
      />
    </>
  );
};

export default Extra;
