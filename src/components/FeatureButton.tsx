interface Props {
  imageURL?: string;
  text: string;
}
export default function FeatureButton({ imageURL, text }: Props) {
  return (
    <div className="flex bg-container my-3 pl-3 min-w-[10vw] rounded-md">
      <button className="text-left w-[50vw] md:w-[20vw] flex items-center gap-[1rem] text-sm font-bold">
        <div className="bg-icon">
          <img className="w-[35px]" src={imageURL} alt="" />
        </div>
        {text}
      </button>
    </div>
  );
}
