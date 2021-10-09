import React from "react";
import { connect } from "react-redux";
import { buyCake } from '../redux'

function CakeContainer(props) {
  return <div>
    <h2>Number of Cakes-- {props.numberOfCakes}</h2>
    <button onClick={ () => props.buyCake}>Buy Cakes</button>
  </div>
}

const mapStateToProps = (state) => {
  return {
    numberOfCakes: state.numberOfCakes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyCakes: () => dispatch(buyCake())
  }
}
export default connect(mapStateToProps, mapDispatchToProps(CakeContainer));
