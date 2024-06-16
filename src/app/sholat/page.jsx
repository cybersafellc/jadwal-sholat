import Navbar from "../components/Navbar";
import Section from "../components/Section";
import NavMenu from "../components/sholat/NavMenu";

export default function Sholat() {
  return (
    <>
      <Section>
        <h1>Sholat page</h1>
        <Navbar>
          <NavMenu />
        </Navbar>
      </Section>
    </>
  );
}
