import NavMenu from "../components/home/NavMenu";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import CardPost from "../components/CardPost";

export default function Home() {
  return (
    <>
      <Section>
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
