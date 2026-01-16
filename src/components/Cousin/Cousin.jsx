import Friend from "../Friend/Friend";
import Special from "../Special/Special";

const Cousin = ({ name, asset }) => {
  return (
    <div>
      <h2>Cousin</h2>
      <p>{name}</p>
      <section>{asset && <Special asset={asset}></Special>}</section>
      <section>{name === "Sunerah" && <Special></Special>}</section>
      <section>{name === "Suhana Kabir" && <Friend></Friend>}</section>
    </div>
  );
};

export default Cousin;
