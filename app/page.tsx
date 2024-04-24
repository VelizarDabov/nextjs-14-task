import Hero from "./_components/Hero";
import backgroundImage from "../public/background.png";

export default function Home() {
  return (
    <main
      className=" mx-auto max-w-4xl"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Hero />
    </main>
  );
}
