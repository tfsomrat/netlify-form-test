import DynamicIcon from "@/helpers/DynamicIcon";
import { motion } from "framer-motion";
import React from "react";

const Modal = ({
  children,
  onClose,
}: {
  children: React.ReactNode;
  onClose: (event: React.MouseEvent<HTMLDivElement>) => void;
}) => {
  return (
    <motion.div
      onClick={(e) => onClose(e)}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="overlay"
    >
      <div className="modal-body">
        <div className="overflow-auto w-auto h-auto bg-white shadow relative max-w-[100vw] flex-grow-0 max-h-screen">
          <div className="flex flex-col h-full">{children}</div>
        </div>
      </div>
    </motion.div>
  );
};

export default Modal;

function NewComp() {
  return (
    <div>
      <h2 className="mb-5 font-primary">Where would you like to go?</h2>
      <div className="border-2 border-black rounded-lg py-1.5 relative">
        <span className="absolute left-0 top-1/2 -translate-y-1/2 pl-3 text-center">
          <DynamicIcon
            icon="FaMagnifyingGlass"
            className="w-6 h-6 text-inherit"
          />
        </span>
        <input
          className="inline-block pl-12 bg-transparent w-full border-none focus:shadow-0 focus:outline-none focus:ring-0"
          placeholder=""
          type="text"
          name="text"
        />
      </div>
    </div>
  );
}
