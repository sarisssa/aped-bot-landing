import "./App.css";

import apedBotBackground from "./assets/ApedBotBackground/picture.svg";

import discordBot from "./assets/TradeOnGoContainer/discord-bot.svg";
import limitOrders from "./assets/TradeOnGoContainer/limit-orders.svg";
import marketOrders from "./assets/TradeOnGoContainer/market-orders.svg";

import assetVariety from "./assets/PersonalizedTradingContainer/asset-variety.svg";
import bestAssetPrice from "./assets/PersonalizedTradingContainer/best-asset-price.svg";
import lowestFees from "./assets/PersonalizedTradingContainer/lowest-fees.svg";
import perpAggregator from "./assets/PersonalizedTradingContainer/perp-aggregator.svg";

import ApedBanana from "./assets/Leaderboard/apedBanana";
import FeatureButton from "./components/FeatureButton";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LeaderBoardRow from "./components/LeaderBoardRow";
import { traderData } from "./mock";

function App() {
  return (
    <div
      id="entire-website-container"
      className="flex flex-col gap-20 bg-black min-w-[80vw]"
    >
      <Header />
      <div className="relative flex justify-center items-center">
        <div
          id="black-circle"
          className="rounded-full aspect-square flex flex-col items-center"
        >
          <span className="font-extrabold mb-5 text-3xl">APED BOT</span>
          <span className="font-bold mb-3">A NEW WAY TO TRADE PERPS</span>
          <button className="font-bold max-w-[20vw] rounded-xl">
            Trade Now
          </button>
        </div>
      </div>
      <div className="flex justify-center ">
        <div
          id="embed-vid-div"
          className="bg-container justify-center min-w-[60vw] min-h-[40vh] rounded-xl  text-center "
        >
          <span>HERO VIDEO</span>
        </div>
      </div>
      <div id="aped-meta-info-container" className="flex justify-between">
        <div className="flex flex-col bg-container px-3 pt-6 pb-3 ml-6 rounded-xl min-w-[20vw]">
          <span className="font-bold text-4xl">$1,234,567</span>
          <span className="font-semibold">Total Trading Volume</span>
        </div>
        <div className="flex flex-col items-center bg-container px-3 pt-6 pb-3 mr-6 rounded-xl min-w-[20vw]">
          <div className="flex items-center">
            <span className="font-bold text-4xl pl-3">1,234,567</span>
            <ApedBanana />
          </div>
          <span className="font-semibold">Banana Points Earned</span>
        </div>
      </div>
      <div id="trade-on-go-container" className="bg-container rounded-xl">
        <div id="features-header" className="flex flex-col items-center">
          <h2 className="font-bold text-xl mb-3 pt-6 rounded-lg">
            TRADE ON THE GO
          </h2>
          <span className="mb-3">TRADE PERPS ON TELEGRAM AND DISCORD</span>
          <button className="mb-7 font-semibold">Trade Now</button>
        </div>
        <div id="feature-section-container" className="flex justify-evenly">
          <div id="button-container" className="flex flex-col pb-10">
            <FeatureButton imageURL={limitOrders} text={"LIMIT ORDERS"} />
            <FeatureButton imageURL={marketOrders} text={"MARKET ORDERS"} />
            <FeatureButton imageURL={discordBot} text={"DISCORD BOT"} />
          </div>
          <div id="limit-orders" className="flex flex-col text-left">
            <h3 className="font-bold text-xl">LIMIT ORDERS</h3>
            <span className="mb-5">LIMIT LOSSES - SECURE PROFIT</span>
            <div
              id="limit-order-vid"
              className="bg-button rounded-xl min-h-[60%] min-w-[30vw]"
            ></div>
          </div>
        </div>
      </div>
      <div
        id="personalized-trading-container"
        className="bg-container rounded-xl"
      >
        <div id="features-header" className="flex flex-col items-center">
          <h2 className="font-bold text-xl mb-3 pt-6 rounded-lg">
            PERSONALIZED TRADING
          </h2>
          <span className="mb-3">
            TRADE ON YOUR FAVORITE EXISTING PLATFORMS - OPTIMIZE FOR BEST ASSET
            PRICE, LOW FEES AND SPECIFIC PAIRS
          </span>
        </div>
        <div id="feature-section-container" className="flex justify-evenly">
          <div id="button-container" className="flex flex-col pb-10">
            <FeatureButton imageURL={perpAggregator} text={"PERP AGGREGATOR"} />
            <FeatureButton
              imageURL={bestAssetPrice}
              text={"BEST ASSET PRICE"}
            />
            <FeatureButton imageURL={lowestFees} text={"LOWEST FEES"} />
            <FeatureButton imageURL={assetVariety} text={"ASSET VARIETY"} />
          </div>
          <div id="perp-aggregator" className="flex flex-col text-left">
            <h3 className="font-bold text-xl">PERP AGGREGATOR</h3>
            <span className="mb-5">
              AGGREGATED LIQUIDITY - MINIMAL SLIPPAGE - INTELLIGENT EXECUTION
            </span>
            <div
              id="limit-order-vid"
              className="bg-button rounded-xl min-h-[60%] min-w-[30vw]"
            ></div>
          </div>
        </div>
      </div>
      <div
        id="leader-board"
        className="flex flex-col bg-container px-3 rounded-xl"
      >
        <h3 className="font-bold mb-6 pt-3">Point Leaderboard</h3>
        <div className="pb-6">
          {traderData.map((traderData, index) => (
            <LeaderBoardRow key={index} traderData={traderData} />
          ))}
        </div>
      </div>
      <div id="transistor-background">
        <img src={apedBotBackground} alt="" />
      </div>
      {/* <ApedBotBackground /> */}
      <Footer />
    </div>
  );
}

export default App;

//Transistor Line SVG
//Header should not be fixed
//Flip Second Table
//Fix Icon in Buttons
//Mobile responsiveness
//Fix APED background
//Add meta data row for leaderboard
