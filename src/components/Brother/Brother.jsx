import { useContext } from "react";
import { MoneyContext } from "../Grandpa/Grandpa";

const Brother = () => {
  const [money, setMoney] = useContext(MoneyContext);
  return (
    <div>
      <h2>Brother</h2>
      Grandpa Money: {money}
      <section>
        <button
          onClick={() => setMoney(money + 2000)}
          className="btn btn-soft btn-primary my-4"
        >
          Add 1000 tk
        </button>
      </section>
    </div>
  );
};

export default Brother;
