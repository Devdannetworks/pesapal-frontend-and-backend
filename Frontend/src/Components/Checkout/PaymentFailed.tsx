import { useParams } from "react-router-dom";

const PaymentFailed = () => {
  const { orderTrackingId } = useParams();

  return (
    <div>
      <h1>Payment failed!</h1>
      <p>Your transaction reference is: {orderTrackingId}</p>
    </div>
  );
};

export default PaymentFailed;
