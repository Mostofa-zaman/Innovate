import Bannar from "../component/bannar/Bannar";
import Company from "../component/company/Company";
import Customer from "../component/customer/Customer";
import Digital from "../component/digital/Digital";
import Services from "../component/services/Services";
import Solution from "../component/solution/Solution";
import Team from "../component/team/Team";
import Update from "../component/update/Update";
import World from "../component/world/World";

const Home = () => {
  return (
    <>
      <Bannar />
      <Company />
      <Services />
      <Solution/>
      <Team/>
      <Digital/>
      <World/>
      <Customer/>
      <Update/>
    </>
  );
};

export default Home;
