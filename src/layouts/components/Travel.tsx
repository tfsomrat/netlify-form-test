import { useForm } from "@/hooks/useForm";
import { DynamicContent } from "@/types";
import StepperNavigation from "./StepperNavigation";

const initialState = {
  adults: 1,
  children: 0,
};

type state = typeof initialState;

const Travel = ({
  currentStep,
  nextStep,
  prevStep,
  data,
  setData,
}: DynamicContent) => {
  const { formData, isError, onUpdate, validateCheck } = useForm<state>({
    initialState,
    key: "travel",
  });
  const { adults, children } = formData;

  return (
    <>
      {isError && (
        <p className="bg-red-300 p-3 rounded mb-5 text-dark">
          Please complete this field so we can find the best Trip Designers for
          you.
        </p>
      )}
      <h2 className="section-title-sm">
        How many people are going on the trip?
      </h2>
      <div className="flex space-x-4 items-center">
        <button
          onClick={() => onUpdate({ adults: adults - 1 })}
          disabled={adults === 1}
          type="button"
          className="border border-border rounded px-6 py-1 text-xl font-bold"
        >
          -
        </button>
        <div>{adults} Adults</div>
        <button
          onClick={() => onUpdate({ adults: adults + 1 })}
          type="button"
          className="border border-border rounded px-6 py-1 text-xl font-bold"
        >
          +
        </button>
      </div>

      <div className="flex space-x-4 items-center mt-8">
        <button
          onClick={() => onUpdate({ children: children - 1 })}
          disabled={children === 0}
          type="button"
          className="border border-border rounded px-6 py-1 text-xl font-bold"
        >
          -
        </button>
        <div>{children} Children</div>
        <button
          onClick={() => onUpdate({ children: children + 1 })}
          type="button"
          className="border border-border rounded px-6 py-1 text-xl font-bold"
        >
          +
        </button>
      </div>

      <div className="w-full h-0.5 bg-theme-light mt-10" />
      {[...Array(children).keys()].map((i) => (
        <div className="mt-5" key={i}>
          <p className="text-sm text-dark mb-3">Children {i + 1} age</p>
          <input
            name={`children-${i + 1}`}
            onChange={(e) => {
              onUpdate({ [`children-${i + 1}`]: e.target.value });
            }}
            value={(formData as any)[`children-${i + 1}`] ?? ""}
            type="number"
            className="p-3"
            placeholder="0-17"
          />
          <small className="hidden text-red-500 mt-2">
            Enter children age.
          </small>
        </div>
      ))}

      <StepperNavigation
        currentStep={currentStep}
        nextStep={nextStep}
        prevStep={prevStep}
        validateCheck={validateCheck}
        setData={setData}
        data={data}
        indivisualFormData={formData}
      />
    </>
  );
};

export default Travel;
