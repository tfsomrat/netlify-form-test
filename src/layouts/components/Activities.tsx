import { useForm } from "@/hooks/useForm";
import { DynamicContent } from "@/types";
import ActivitesItem from "./ActivityItem";
import StepperNavigation from "./StepperNavigation";

const activities = [
  {
    label: "Must See Attractions",
    children: [{ label: "1" }, { label: "2" }, { label: "3" }],
  },
  {
    label: "Beach",
  },
  {
    label: "Local Culture",
  },
];

interface state {
  activities: Array<{
    label: string;
    children?: Array<{
      label: string;
    }>;
  }>;

  considerations: boolean;
}

const initialState: state = {
  activities: [],
  considerations: false,
};

const Activities = ({
  currentStep,
  nextStep,
  prevStep,
  data,
  setData,
}: DynamicContent) => {
  const { formData, isError, toggleaActivity, validateCheck, onUpdate } =
    useForm<state>({
      initialState,
      key: "activities",
    });

  return (
    <>
      {isError && (
        <p className="bg-red-300 p-3 rounded mb-5 text-dark">
          Please complete this field so we can find the best Trip Designers for
          you.
        </p>
      )}
      <h2 className="section-title-sm">What do you want to do there?</h2>
      <ActivitesItem
        toggleActives={toggleaActivity}
        activities={activities}
        selectedActivities={formData.activities}
      />

      <div className="mt-4">
        <input
          onChange={(e) => onUpdate({ considerations: e.target.checked })}
          checked={formData.considerations}
          type="checkbox"
          name="considerations"
          id="considerations"
        />
        <label className="ml-3" htmlFor="considerations">
          Any important considerations we should be aware of?
        </label>
      </div>

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

export default Activities;
