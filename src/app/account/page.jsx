import NavMenu from "../components/account/NavMenu";
import Navbar from "../components/Navbar";
import Section from "../components/Section";

export default function Account() {
  return (
    <>
      <Section>
        <h1>Account</h1>
        <Navbar>
          <NavMenu />
        </Navbar>
      </Section>
    </>
  );
}
