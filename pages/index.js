import Head from "next/head";
import styles from "../styles/Home.module.css";
import Carousel from "../src/carousel/Carousel";

const items = [
  "/assets/images/1.jfif",
  "/assets/images/2.jfif",
  "/assets/images/3.jfif",
  "/assets/images/4.jfif",
  "/assets/images/5.jfif",
  "/assets/images/1.jfif",
  "/assets/images/2.jfif",
  "/assets/images/3.jfif",
  "/assets/images/4.jfif",
  "/assets/images/5.jfif",
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>Valar Bottoms</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Carousel />

      <main className="py-20 px-10 flex flex-1 flex-col justify-center items-center">
        <h1 className="m-0 mb-5 leading-tight text-8xl">VALAR BOTTOMS</h1>

        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus
          lorem mi, pulvinar molestie nunc bibendum quis. In condimentum
          scelerisque dui vitae semper. Curabitur semper molestie mauris sit
          amet condimentum. Pellentesque habitant morbi tristique senectus et
          netus et malesuada fames ac turpis egestas. Phasellus ut mollis
          turpis. Morbi feugiat, nulla sit amet ullamcorper vestibulum, enim dui
          luctus odio, at efficitur nulla arcu vel velit. Aenean volutpat urna
          vel urna convallis vulputate. Aliquam ligula velit, porttitor sed dui
          malesuada, faucibus pulvinar ante. Suspendisse non consectetur mi, id
          suscipit mi. In convallis ex sit amet sapien pretium, consectetur
          viverra sapien dignissim.
        </p>

        <h3 className="m-10 leading-tight text-6xl">ALGUNS MODELOS</h3>
        <div className="flex flex-row gap-5 w-full m-5 h-30 bg-red-100 overflow-x-scroll">
          {items.map((item) => {
            return <img src={item} width="250px" />;
          })}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
