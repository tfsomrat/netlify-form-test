import { useForm } from "@/hooks/useForm";
import { DynamicContent } from "@/types";
import StepperNavigation from "./StepperNavigation";

const initialState = {
  from: "",
  to: "",
};

type state = typeof initialState;

const Budget = ({
  currentStep,
  nextStep,
  prevStep,
  data,
  setData,
}: DynamicContent) => {
  const { formData, isError, onUpdate, validateCheck } = useForm<state>({
    initialState,
    key: "budget",
  });

  return (
    <>
      {isError && (
        <p className="bg-red-300 p-3 rounded mb-5 text-dark">
          Please complete this field so we can find the best Trip Designers for
          you.
        </p>
      )}
      <h2 className="section-title-sm">
        What is a comfortable budget range for this trip, excluding flights?
      </h2>
      <p className="section-desc">
        We understand you might not have an exact budget at this point and
        that&apos;s okay. We&apos;re here to help!
      </p>
      <p className="section-desc">
        <b className="text-base">
          Average budget for 7 travelers for 18 days in Costa Rica: $20,000+
        </b>
      </p>
      <div className="flex space-x-4 items-center">
        <div className="">
          <label className="block mb-3">From</label>
          <select
            value={formData.from}
            onChange={(e) => {
              onUpdate({ from: e.target.value });
            }}
          >
            <option>From</option>
            <option value={"1000"}>$1000</option>
          </select>
        </div>
        <div className="">
          <label className="block mb-3">To</label>
          <select
            value={formData.to}
            onChange={(e) => {
              onUpdate({ to: e.target.value });
            }}
          >
            <option>To</option>
            <option value={"1000"}>$1000</option>
          </select>
        </div>
      </div>
      <p className="text-sm font-bold text-dark mt-3">
        How do we calculate your average budget?
      </p>

      <StepperNavigation
        currentStep={currentStep}
        nextStep={nextStep}
        prevStep={prevStep}
        validateCheck={validateCheck}
        setData={setData}
        indivisualFormData={formData}
      />
    </>
  );
};

export default Budget;
