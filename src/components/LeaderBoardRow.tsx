import ApedBanana from "../assets/Leaderboard/apedBanana";
import { TraderData } from "../types";

interface Props {
  traderData: TraderData;
}

//Number of key value pairs in Props determine how many attributes you need to pass down when mapping

export default function LeaderBoardRow({ traderData }: Props) {
  const { rank, traderName, PNL, points } = traderData;
  return (
    <div className="bg-row flex justify-around font-bold mb-3 py-1 rounded-xl">
      <span>{rank}</span>
      <span>{traderName}</span>
      <span>{PNL}</span>
      <div className="flex flex-row items-center">
        <span>{points}</span>
        <ApedBanana />
      </div>
    </div>
  );
}
