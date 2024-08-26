import { Container } from "@mui/material";
import { useParams } from "react-router-dom";

const PaymentSuccess = () => {
  const { orderTrackingId } = useParams();

  return (
    <Container>
      <div className="min-h-screen flex flex-col items-center justify-center font-semibold">
        <h1>Payment Successful!</h1>
        <p>Your transaction reference is: {orderTrackingId}</p>
      </div>
    </Container>
  );
};

export default PaymentSuccess;
