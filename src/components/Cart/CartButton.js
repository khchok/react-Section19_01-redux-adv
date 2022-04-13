import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";

import classes from "./CartButton.module.css";


const CartButton = (props) => {
  const dispatch = useDispatch();
  const totalQuantity = useSelector(state => state.cart.totalQuantity);


  const toggleCartHanlder = () => {
    dispatch(uiActions.toggle());
  };
  return (
    <button className={classes.button} onClick={toggleCartHanlder}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
