import { orderActions } from "./OrderSlice";

export const fetchOrders = () => {
  return async (dispatch) => {
    const fetchHandler = async () => {
      const res = await fetch(
        "https://myfoodcms189.herokuapp.com/api/restaurant-orders"
      );
      const data = await res.json();
      return data;
    };
    try {
      const riderData = await fetchHandler();
      dispatch(orderActions.getOrders(riderData));
      // console.log("Redux fetch Orders");
    } catch (error) {
      console.log(error);
    }
  };
};
