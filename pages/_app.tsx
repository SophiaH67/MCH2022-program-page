import "../styles/globals.css";
import type { AppProps } from "next/app";
import InfoBar from "../components/InfoBar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div
      className="w-full h-full bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage: `url("/bg.jpg")`,
      }}
    >
      <div className="min-h-screen backdrop-blur-md lg:backdrop-blur-xl giga:backdrop-blur-2xl relative">
        <InfoBar />
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
