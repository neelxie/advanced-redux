import React from "react";
import { connect } from "react-redux";
import { buyIceCream } from '../redux'

function IceCreamContainer(props) {
  return <div>
    <h2>Number of IceCreams-- {props.numOfIcecreams}</h2>
    <button onClick={props.buyIceCream}>Buy IceCreams</button>
  </div>
}

const mapStateToProps = (state) => {
  return {
    numOfIcecreams: state.iceCream.numOfIcecreams
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
