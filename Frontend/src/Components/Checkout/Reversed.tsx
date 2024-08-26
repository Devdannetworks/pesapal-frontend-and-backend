import { useParams } from "react-router-dom";

const PaymentReversed = () => {
  const { orderTrackingId } = useParams();

  return (
    <div>
      <h1>Payment reversed!</h1>
      <p>Your transaction reference is: {orderTrackingId}</p>
    </div>
  );
};

export default PaymentReversed;
