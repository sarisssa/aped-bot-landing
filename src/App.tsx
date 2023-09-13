import "./App.css";
import FeatureButton from "./components/FeatureButton";
import Footer from "./components/Footer";
import Header from "./components/Header";

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
        <div className="flex flex-col bg-container px-3 pt-6 pb-3 mr-6 rounded-xl min-w-[20vw]">
          <span className="font-bold text-4xl pl-3">$1,234,567</span>
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
            <FeatureButton text={"LIMIT ORDERS"} />
            <FeatureButton text={"MARKET ORDERS"} />
            <FeatureButton text={"DISCORD BOT"} />
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
      <div id="trade-on-go-container" className="bg-container rounded-xl">
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
            <FeatureButton text={"PERP AGGREGATOR"} />
            <FeatureButton text={"BEST ASSET PRICE"} />
            <FeatureButton text={"LOWEST FEES"} />
            <FeatureButton text={"ASSET VARIETY"} />
          </div>
          <div id="limit-orders" className="flex flex-col text-left">
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
      <div id="leader-board" className="flex flex-col bg-container rounded-xl">
        <h3>Point Leaderboard</h3>
      </div>

      <Footer />
    </div>
  );
}

export default App;
