interface Props {
  rank: number;
  traderName: string;
  PNL: string;
  points: string;
}

export default function LeaderBoardRow({
  rank,
  traderName,
  PNL,
  points,
}: Props) {
  return (
    <div className="bg-row flex justify-around">
      <span>{rank}</span>
      <span>{traderName}</span>
      <span>{PNL}</span>
      <span>{points}</span>
    </div>
  );
}
