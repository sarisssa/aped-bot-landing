interface Props {
  imageURL?: string;
  text: string;
}
export default function FeatureButton({ imageURL, text }: Props) {
  return (
    <div className="flex my-3 pl-3 min-w-[10vw] rounded-md">
      <button className="bg-transparent text-left w-[50vw] md:w-[20vw] flex items-center gap-[1rem] text-sm font-bold">
        <div className="bg-container">
          <img className="w-[35px]" src={imageURL} alt="" />
        </div>
        {text}
      </button>
    </div>
  );
}
// Add bg colour to <button>
//OR TRANSPARENT
