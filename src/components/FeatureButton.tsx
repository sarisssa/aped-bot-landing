// import { Dispatch, SetStateAction } from "react";

interface Props {
  imageURL?: string;
  text: string;
  onClick?: () => void;
}
export default function FeatureButton({ imageURL, text, onClick }: Props) {
  return (
    <div className="flex bg-container my-3 pl-3 min-w-[10vw] rounded-md">
      <button
        onClick={onClick}
        className="text-left w-[60vw] md:w-[20vw] flex items-center gap-[1rem] text-sm font-bold"
      >
        <div className="bg-icon">
          <img className="w-[35px]" src={imageURL} alt="" />
        </div>
        {text}
      </button>
    </div>
  );
}
