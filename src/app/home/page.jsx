import NavMenu from "../components/home/NavMenu";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import CardPost from "../components/CardPost";
import CarouselAds from "../components/CaroselAds";

export default function Home() {
  return (
    <>
      <Section className="pb-24">
        <div>
          <CarouselAds />
        </div>
        <span className="relative flex justify-center my-4">
          <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>

          <span className="relative z-10 bg-white px-6">News</span>
        </span>
        <div className="flex flex-col gap-5">
          <CardPost />
          <CardPost />
        </div>
        <Navbar>
          <NavMenu />
        </Navbar>
      </Section>
    </>
  );
}
