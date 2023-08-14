import { useState } from "react";
export const useForm = <T>({
  initialState,
  key,
}: {
  initialState: T;
  key: string;
}) => {
  const [formData, setFormData] = useState<T>(
    localStorage.getItem(key)
      ? JSON.parse(localStorage.getItem(key) as string)
      : initialState,
  );
  const [isError, setError] = useState<boolean>(false);

  const onUpdate = (updatedState: any) => {
    const newData = { ...formData, ...updatedState };
    setFormData(newData);
    localStorage.setItem(key, JSON.stringify(newData));
  };

  const toggleaActivity = (activity: string, parentActivity?: string) => {
    let selectedActivity = (formData as any).activities as Array<{
      label: string;
      children?: Array<{ label: string }>;
    }>;

    if (parentActivity) {
      const isParentExit = selectedActivity.find(
        (item) => item.label === parentActivity,
      );

      if (isParentExit) {
        selectedActivity = selectedActivity.map((item) => {
          if (item.label === parentActivity) {
            return {
              ...item,
              children: item.children?.find((child) => child.label === activity)
                ? item.children?.filter((child) => child.label !== activity)
                : item.children
                ? [{ label: activity }, ...item.children]
                : [{ label: activity }],
            };
          }
          return item;
        });
      } else {
        selectedActivity.push({
          label: parentActivity,
          children: [{ label: activity }],
        });
      }
    } else {
      const isExists = selectedActivity.find((item) => item.label === activity);

      if (isExists) {
        selectedActivity = selectedActivity.filter(
          (item) => item.label !== activity,
        );
      } else {
        selectedActivity.push({ label: activity, children: [] });
      }
    }
    localStorage.setItem(key, JSON.stringify({ activities: selectedActivity }));
    setFormData({ activities: selectedActivity } as any);
  };

  const validateCheck = () => {
    let isError = Object.entries(formData as any).some(([key, value]) => {
      if (typeof value === "string" && value.trim() === "") {
        return true;
      }
      if (Array.isArray(value) && value.length === 0) {
        return true;
      }
      if (typeof value === "object" && Object.keys(value as any).length === 0) {
        if (value instanceof Date) {
          return false;
        }
        return true;
      }
      if (value instanceof Date) {
        return false;
      }

      return false;
    });
    setError(isError);
    return isError;
  };

  return { formData, isError, onUpdate, validateCheck, toggleaActivity };
};
