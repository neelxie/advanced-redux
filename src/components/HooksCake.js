import React from "react";
import { useSelector } from "react-redux";

function HooksCake() {
  const noOfCakes = useSelector((state) => state.numOfCakes);
  return <div>
    <h2>Num of cakes -- {noOfCakes}</h2>
    <button onClick="">Buy Cake</button>
  </div>;
}

export default HooksCake;
