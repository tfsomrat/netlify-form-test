import DynamicIcon from "@/helpers/DynamicIcon";
import { useForm } from "@/hooks/useForm";
import { DynamicContent } from "@/types";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import StepperNavigation from "./StepperNavigation";

const initialState = {
  country: "",
};

type state = typeof initialState;

const getCitites = async () => {
  const res = await fetch(
    "https://countriesnow.space/api/v0.1/countries/cities",
    {
      body: JSON.stringify({
        country: "spain",
      }),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  const data = await res.json();
  return data;
};

const Location = ({
  currentStep,
  nextStep,
  prevStep,
  data,
  setData,
}: DynamicContent) => {
  const { formData, isError, onUpdate, validateCheck } = useForm<state>({
    initialState,
    key: "location",
  });
  const [cities, setCities] = useState<{ isLoading: boolean; data: string[] }>({
    isLoading: true,
    data: [],
  });

  const [isOpen, setOpen] = useState(false);
  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    getCitites().then((res) => {
      setCities({ data: res.data, isLoading: false });
    });
  }, []);

  const [input, setInput] = useState("");

  useEffect(() => {
    setInput(formData.country);
  }, [formData.country]);

  return (
    <>
      {isError && (
        <p className="bg-red-300 p-3 rounded mb-5 text-dark">
          Please complete this field so we can find the best Trip Designers for
          you.
        </p>
      )}
      <h2 className="section-title-sm">Where would you like to go?</h2>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, type: "tween" }}
            className="overlay"
            onClick={onClose}
          />
        )}
      </AnimatePresence>
      <div className={`travel-form ${isOpen ? "active" : ""}`}>
        <div>
          <div className="search-wrapper">
            <DynamicIcon
              className="w-6 h-6 absolute left-2 top-1/2 -translate-y-1/2"
              icon="FaMagnifyingGlass"
            />
            <motion.input
              autoComplete={"off"}
              onFocus={() => setOpen(true)}
              onBlur={() => setInput(formData.country)}
              type="text"
              name="country"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={isOpen ? "Try 'Barcelona'" : "Where to go?"}
            />
          </div>

          {isOpen && (
            <ul className="space-y-3">
              <li className="py-2">
                <span className="text-sm text-[#767676]">
                  POPULAR DESTINATIONS
                </span>
              </li>
              {cities.data.slice(0, 4).map((city, i) => {
                return (
                  <motion.li
                    onClick={() => {
                      onUpdate({ country: city });
                      onClose();
                    }}
                    key={i}
                    layout
                    className="cursor-pointer"
                  >
                    <p className="text-sm text-black">{city}</p>
                    <span className="text-sm text-[#767676]">
                      United States, North America
                    </span>
                  </motion.li>
                );
              })}
            </ul>
          )}
        </div>
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

export default Location;
