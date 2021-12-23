import { buyCandy } from "../redux";
import { connect } from "react-redux";

const CandyContainer = (props) => {
  return (
    <div>
      <h2>Num of Candies - {props.candy} </h2>
      <button onClick={props.buyCandy}>Buy Candy</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    candy: state.candy.candy,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCandy: () => dispatch(buyCandy()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CandyContainer);
