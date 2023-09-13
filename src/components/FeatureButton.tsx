interface Props {
  imageURL?: string;
  text: string;
}
export default function FeatureButton({ imageURL, text }: Props) {
  return (
    <div className="flex my-3 pl-3 min-w-[10vw] rounded-md">
      <div className="bg-container">
        {" "}
        <img src={imageURL} alt="" />
      </div>
      <button className="text-left py-3 w-[20vw]">{text}</button>
    </div>
  );
}
