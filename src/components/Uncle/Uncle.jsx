import Cousin from "../Cousin/Cousin";

const Uncle = ({ asset }) => {
  return (
    <div>
      <h2>Uncle</h2>
      <section className="flex">
        <Cousin name={"Tausif Khan"} asset={asset}></Cousin>
        <Cousin name={"Suhana Kabir"}></Cousin>
      </section>
    </div>
  );
};

export default Uncle;
