import discord from "../assets/Footer/discord.svg";
import logo from "../assets/Footer/logo.svg";
import medium from "../assets/Footer/medium.svg";
import twitter from "../assets/Footer/twitter.svg";

const Footer = () => {
  return (
    <div className="bg-[url('./assets/Footer/footer.svg')] gap-2 md:bg-[url('./assets/Footer/footer.svg')] bg-cover bg-center flex flex-col justify-center items-center h-screen relative">
      <div className="bg-[#000000] bg-opacity-[0] md:bg-opacity-[0.3] top-0 left-0 right-0 bottom-0 absolute"></div>
      <div className="z-[50]">
        <div>
          <img src={logo} className="mx-auto w-[84px] h-[84px]" alt=""></img>
        </div>
        <div className="flex flex-row items-center mt-[25px] justify-center">
          <a href="https://medium.com/apedtrade" target="_blank">
            <img src={medium} alt="" className="w-[40px] h-[32px]"></img>
          </a>
          <a
            href="https://discord.com/invite/FbFjCz4PAR"
            className="ml-[20px]"
            target="_blank"
          >
            <img src={discord} alt="" className="w-[42px] h-[42px]"></img>
          </a>
          <a href="https://twitter.com/aped_xyz" target="_blank">
            <img
              src={twitter}
              alt=""
              className="ml-[23px] w-[40px] h-[34px]"
            ></img>
          </a>
          <a href="https://t.me/ApedTrade" target="_blank">
            <img
              src={twitter}
              alt=""
              className="ml-[23px] w-[40px] h-[34px]"
            ></img>
          </a>
        </div>

        <div className="flex flex-row justify-center relative left-2.5 w-[208px] mt-[6px] gap-4">
          <a
            href="https://aped-xyz.gitbook.io/litepaper"
            target="_blank"
            className="text-[#F9F9FB] text-[18px] leading-[22px] font-[800] flex-none order grow-0"
          >
            DOCS
          </a>
          <a
            href="/terms-of-service"
            className="text-[#F9F9FB] text-[18px] leading-[22px] font-[800] flex-none order grow-0"
          >
            TERMS OF SERVICE
          </a>
          <a
            href="/private-policy"
            className="text-[#F9F9FB] text-[18px] leading-[22px] font-[800] flex-none order grow-0"
          >
            PRIVATE POLICY
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
