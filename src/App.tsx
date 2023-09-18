import "./App.css";

import "@fontsource/barlow";
import "@fontsource/barlow/400-italic.css";
import "@fontsource/barlow/400.css";
import "@fontsource/barlow/700-italic.css";
import "@fontsource/barlow/700.css";
import "@fontsource/barlow/900-italic.css";
import "@fontsource/barlow/900.css";

import discordBot from "./assets/TradeOnGoContainer/discord-bot.svg";
import limitOrders from "./assets/TradeOnGoContainer/limit-orders.svg";
import marketOrders from "./assets/TradeOnGoContainer/market-orders.svg";

import assetVariety from "./assets/PersonalizedTradingContainer/asset-variety.svg";
import bestAssetPrice from "./assets/PersonalizedTradingContainer/best-asset-price.svg";
import lowestFees from "./assets/PersonalizedTradingContainer/lowest-fees.svg";
import perpAggregator from "./assets/PersonalizedTradingContainer/perp-aggregator.svg";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Home";
import PrivatePolicyScreen from "../PrivatePolicyScreen";
import TermsofServiceScreen from "../TermsofServiceScreen";
import ABB from "./assets/ApedBotBackground/picture.png";
import ApedBanana from "./assets/Leaderboard/apedBanana";
import FeatureButton from "./components/FeatureButton";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LeaderBoardRow from "./components/LeaderBoardRow";
import { traderData } from "./mock";

function App() {
  const navigatetoTrade = () => {
    window.open("https://t.me/ApedTrad", "_blank");
  };

  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="private-policy" element={<PrivatePolicyScreen />} />{" "}
          <Route path="terms-of-service" element={<TermsofServiceScreen />} />{" "}
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );

  return (
    <>
      <Header />
      <div className="header-banner font-sans">
        <div
          id="black-circle"
          className="flex flex-col items-center header-banner-text"
        >
          <span className="font-extrabold mb-5 text-3xl">APED BOT</span>
          <span className="font-bold mb-3">A NEW WAY TO TRADE PERPS</span>
          <button
            className="font-bold md:max-w-[20vw] rounded-xl z-10"
            onClick={navigatetoTrade}
          >
            <a
              href="https://t.me/ApedTrade"
              target="_blank"
              className="text-white font-bold text-sm"
            >
              TRADE NOW
            </a>
          </button>
        </div>
        <img className="header-banner-img" src={ABB} alt="" />
      </div>
      <div
        id="entire-website-container"
        className="flex flex-col gap-10 md:gap-20 bg-black max-w-[1280px]"
      >
        <div className="flex justify-center">
          <div
            id="embed-vid-div"
            className="justify-center min-w-[60vw] min-h-[40vh] rounded-xl text-center "
          >
            <div
              style={{
                width: "100%",
                height: "0px",
                position: "relative",
                paddingBottom: "56.250%",
              }}
            >
              <iframe
                src="https://streamable.com/e/j0mncn?quality=highest"
                frameBorder="0"
                width="100%"
                height="100%"
                allowFullScreen
                style={{ width: "100%", height: "100%", position: "absolute" }}
              ></iframe>
            </div>
          </div>
        </div>
        <div
          id="aped-meta-info-container"
          className="flex justify-between flex-col md:flex-row"
        >
          <div className="flex flex-col bg-container px-3 pt-6 pb-3 md:ml-6 mb-5 md:mb-0 rounded-xl min-w-[20vw]">
            <span className="font-bold text-4xl">$1,234,567</span>
            <span className="font-semibold">Total Trading Volume</span>
          </div>
          <div className="flex flex-col items-center bg-container px-3 pt-6 pb-3 md:mr-6 rounded-xl min-w-[20vw]">
            <div className="flex items-center">
              <span className="font-bold text-4xl pl-3">1,234,567</span>
              <ApedBanana />
            </div>
            <span className="font-semibold">Banana Points Earned</span>
          </div>
        </div>
        <div
          id="trade-on-go-container"
          className="bg-container rounded-xl py-9"
        >
          <div id="features-header" className="flex flex-col items-center">
            <h2 className="font-bold mb-[30px] text-[35px] rounded-lg">
              TRADE ON THE GO
            </h2>
            <span className="font-bold text-[15px] mb-[30px]">
              TRADE PERPS ON TELEGRAM AND DISCORD
            </span>
            <button
              className="mb-7 font-semibold uppercase text-[14px]"
              onClick={navigatetoTrade}
            >
              <a
                href="https://t.me/ApedTrade"
                target="_blank"
                className="text-white font-bold text-sm"
              >
                TRADE NOW
              </a>
            </button>
          </div>
          <div
            id="feature-section-container"
            className="flex flex-col md:flex-row justify-evenly"
          >
            <div
              id="button-container"
              className="flex flex-col items-center pb-10"
            >
              <FeatureButton imageURL={limitOrders} text={"LIMIT ORDERS"} />
              <FeatureButton imageURL={marketOrders} text={"MARKET ORDERS"} />
              <FeatureButton imageURL={discordBot} text={"DISCORD BOT"} />
            </div>
            <div
              id="limit-orders"
              className="flex flex-col text-left items-center md:items-start w-[100%] md:w-[450px] px-9 md:px-0"
            >
              <h3 className="font-bold text-xl">LIMIT ORDERS</h3>
              <span className="mb-5">LIMIT LOSSES - SECURE PROFIT</span>
              <div
                style={{
                  width: "100%",
                  height: "0px",
                  position: "relative",
                  paddingBottom: "56.250%",
                }}
              >
                <iframe
                  src="https://streamable.com/e/j0mncn?quality=highest"
                  frameBorder="0"
                  width="100%"
                  height="100%"
                  allowFullScreen
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                  }}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div
          id="personalized-trading-container"
          className="bg-container rounded-xl p-9"
        >
          <div id="features-header" className="flex flex-col items-center">
            <h2 className="font-bold text-xl mb-3 rounded-lg">
              PERSONALIZED TRADING
            </h2>
            <span className="mb-3">
              TRADE ON YOUR FAVORITE EXISTING PLATFORMS - OPTIMIZE FOR BEST
              ASSET PRICE, LOW FEES AND SPECIFIC PAIRS
            </span>
          </div>
          <div
            id="feature-section-container"
            className="flex flex-col md:flex-row justify-evenly"
          >
            <div
              id="perp-aggregator"
              className="flex flex-col text-center md:text-left order-0 md-order-1"
            >
              <h3 className="font-bold text-xl">PERP AGGREGATOR</h3>
              <span className="mb-5">
                AGGREGATED LIQUIDITY - MINIMAL SLIPPAGE - INTELLIGENT EXECUTION
              </span>
              <div
                style={{
                  width: "100%",
                  height: "0px",
                  position: "relative",
                  paddingBottom: "56.250%",
                }}
                className="mb-5 md:mb-0"
              >
                <iframe
                  src="https://streamable.com/e/j0mncn?quality=highest"
                  frameBorder="0"
                  width="100%"
                  height="100%"
                  allowFullScreen
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                  }}
                ></iframe>
              </div>
            </div>
            <div id="button-container" className="flex flex-col items-center">
              <FeatureButton
                imageURL={perpAggregator}
                text={"PERP AGGREGATOR"}
              />
              <FeatureButton
                imageURL={bestAssetPrice}
                text={"BEST ASSET PRICE"}
              />
              <FeatureButton imageURL={lowestFees} text={"LOWEST FEES"} />
              <FeatureButton imageURL={assetVariety} text={"ASSET VARIETY"} />
            </div>
          </div>
        </div>
        <div
          id="leader-board"
          className="flex flex-col bg-container px-3 rounded-xl mb-20"
        >
          <h3 className="font-bold mb-6 pt-3">Point Leaderboard</h3>
          <div className="flex justify-around font-bold">
            <span>Rank</span>
            <span>Trader</span>
            <span>PNL</span>
            <span className="text-[#fd00bd]">Points</span>
          </div>
          <div className="pb-6">
            {traderData.map((traderData, index) => (
              <LeaderBoardRow key={index} traderData={traderData} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;

//Polish

//Make header font size smaller
//Circle size BIGGER + BOLDER (first two)
