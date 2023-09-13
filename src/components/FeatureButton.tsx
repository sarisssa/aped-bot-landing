interface Props {
  //   imageURL: string;
  text: string;
}
export default function FeatureButton({ text }: Props) {
  return (
    <div className="my-3  pl-3 min-w-[10vw] rounded-xl">
      <button className="text-left py-3 w-[20vw]">{text}</button>
    </div>
  );
}

//Fix min max of button width
