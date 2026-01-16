import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";

const Special = ({ asset }) => {
  const gift = useContext(AssetContext);

  return (
    <div>
      <h2>Special</h2>
      <p>
        has: <span className="text-red-600">{asset}</span>{" "}
      </p>
      <p>
        also has: <span className="text-amber-400">{gift}</span>
      </p>
    </div>
  );
};

export default Special;
