"use client";

import { createContext, useContext } from "react";
import Activities from "./components/Activities";
import Budget from "./components/Budget";
import Dates from "./components/Dates";
import Extra from "./components/Extra";
import Location from "./components/Location";
import Travel from "./components/Travel";

export const steps = {
  1: {
    label: "location",
    Content: Location,
  },

  2: {
    label: "dates",
    Content: Dates,
  },
  3: {
    label: "travelers",
    Content: Travel,
  },
  4: {
    label: "budgets",
    Content: Budget,
  },
  5: {
    label: "activities",
    Content: Activities,
  },
  6: {
    label: "extra",
    Content: Extra,
  },
};

export type GlobalContent = {
  data?: any;
  setData?: any;
};

export const SteppersContext = createContext<GlobalContent>({});

export const useStepperContext = () => useContext(SteppersContext);
