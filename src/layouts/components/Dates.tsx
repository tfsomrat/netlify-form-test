import { useForm } from "@/hooks/useForm";
import { DynamicContent } from "@/types";
import { useEffect, useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import StepperNavigation from "./StepperNavigation";

const initialState = {
  startDate: new Date(),
  endDate: new Date(),
};

type state = typeof initialState;

const Dates = ({
  currentStep,
  nextStep,
  prevStep,
  data,
  setData,
}: DynamicContent) => {
  const { formData, isError, onUpdate, validateCheck } = useForm<state>({
    initialState,
    key: "dates",
  });
  const [state, setState] = useState([
    {
      startDate: new Date(formData.startDate),
      endDate: new Date(formData.endDate),
      key: "selection",
    },
  ]);

  useEffect(() => {
    const range = state[0];
    onUpdate({ startDate: range.startDate, endDate: range.endDate });
  }, [state]);

  return (
    <>
      {isError && (
        <p className="bg-red-300 p-3 rounded mb-5 text-dark">
          Please complete this field so we can find the best Trip Designers for
          you.
        </p>
      )}
      <h2 className="section-title-sm">When would you like to travel?</h2>
      <DateRangePicker
        onChange={(item: any) => {
          setState([item.selection]);
        }}
        months={2}
        ranges={state}
        direction="horizontal"
        className="dates-picker"
      />

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

export default Dates;
