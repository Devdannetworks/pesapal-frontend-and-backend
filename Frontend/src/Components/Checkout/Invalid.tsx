import { useParams } from "react-router-dom";

const PaymentInvalid = () => {
  const { orderTrackingId } = useParams();

  return (
    <div>
      <h1>Payment invalid!</h1>
      <p>Your transaction reference is: {orderTrackingId}</p>
    </div>
  );
};

export default PaymentInvalid;
