import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContext } from "../Grandpa/Grandpa";

const Aunty = ({ asset }) => {
  const [money, setMoney] = useContext(MoneyContext);
  return (
    <div>
      <h2>Aunty</h2>
      <section className="flex">
        <Cousin name={"Sunerah"}></Cousin>
        <Cousin name={"Ashfaq"} asset={asset}></Cousin>
      </section>
      <section>
        Grandpa Money: {money}
        <section>
          <button
            onClick={() => setMoney(money + 1000)}
            className="btn btn-soft btn-primary my-4"
          >
            Add 1000 tk
          </button>
        </section>
      </section>
    </div>
  );
};

export default Aunty;
