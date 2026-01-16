import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";

const Friend = () => {
  const gift = useContext(AssetContext);
  return (
    <div>
      <p>Name: Neela Israfil</p>
      <p>
        has: <span className="text-amber-400">{gift}</span>
      </p>
    </div>
  );
};

export default Friend;
