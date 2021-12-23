import { connect } from "react-redux";
import { buyIceCream } from "../redux";
import { buyCake } from "../redux";

const ItemContainer = (props) => {
  return (
    <div>
      <h2>Item - {props.item} </h2>
      <button onClick={props.buyItem}>Buy Items</button>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCreams;

  return {
    item: itemState,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());

  return {
    buyItem: dispatchFunction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);

// how to use the connect function if you only want to dispatch actions but not subscribe
// to the state changes in the store
// where you define mapDispatchToProps but not mapStateToProps
// pass null as first argument to the connect
