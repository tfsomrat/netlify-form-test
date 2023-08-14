import Image from "next/image";

const StepperBanner = ({
  onClose,
}: {
  onClose: (event: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
  return (
    <div className="relative">
      <Image
        src={"/images/intro-default.jpg"}
        className="mb-6"
        width={1000}
        height={200}
        alt="steper-banner"
      />
      <button type="button" onClick={(e) => onClose(e)} className="btn-close">
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24">
          <path
            stroke="#fff"
            strokeMiterlimit={10}
            strokeWidth={2}
            d="m5 5 14 14m0-14L5 19"
          />
        </svg>
      </button>
    </div>
  );
};

export default StepperBanner;
