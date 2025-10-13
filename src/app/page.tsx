import ArabicRain from "./_Components/Home/ArabicRain";
import Awards from "./_Components/Home/Awards";
import Banner from "./_Components/Home/Banner";
import Books from "./_Components/Home/Books";
import Meetings from "./_Components/Home/Meetings";
import Programs from "./_Components/Home/Programs";

export default function Home() {
  return (
    <>
      <Banner />
      <ArabicRain />
      <Awards />
      <Books />
      <Meetings />
      <Programs />
    </>
  );
}
