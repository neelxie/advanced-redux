import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";

function HooksCake() {
  const noOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return <div>
    <h2>Num of cakes -- {noOfCakes}</h2>
    <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
  </div>;
}

export default HooksCake;
