import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Navbar from "../src/navbar/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <div className="mt-20">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
