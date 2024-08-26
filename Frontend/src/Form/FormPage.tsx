import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import toast from "react-hot-toast";
import Input from "../Components/Input";
import HeadersComp from "../Components/Heading";
import ButtonComp from "../Components/Button";
import axios from "axios";

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const API_URL =
    "https://pesapal-frontend-and-backend-server.vercel.app/" ||
    "http://localhost:3000";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      firstName: "",
      secondName: "",
      email: "",
      amount: "",
      phoneNumber: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    if (data.amount <= 0) {
      setLoading(false);
      toast.error("Amount cannot be zero or negative");
      return;
    }

    console.log(data);
    setLoading(true);
    try {
      // Send request to your backend to initiate payment
      const response = await axios.post(`${API_URL}/api/payment`, data);

      // Redirect user to Pesapal payment page
      window.location.href = response.data.redirect_url;
    } catch (err) {
      console.error("Payment initiation failed. Please try again.");
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center p-4">
      <div className="min-w-[350px] max-w-[400px] flex flex-col gap-3">
        <HeadersComp label="Using pesapal API" />
        <hr className="bg-slate-300 w-full h-px" />

        <Input
          id="firstName"
          label="firstName"
          type="text"
          required
          errors={errors}
          register={register}
          disabled={loading}
        />
        <Input
          id="secondName"
          label="secondName"
          type="text"
          required
          errors={errors}
          register={register}
          disabled={loading}
        />
        <Input
          id="email"
          label="Email"
          type="email"
          required
          errors={errors}
          register={register}
          disabled={loading}
        />
        <Input
          id="phoneNumber"
          label="phoneNumber"
          type="tel"
          required
          errors={errors}
          register={register}
          disabled={loading}
        />

        <Input
          id="amount"
          label="Amount"
          type="number"
          required
          errors={errors}
          register={register}
          disabled={loading}
        />

        <ButtonComp
          label={loading ? "Loading..." : "Donate"}
          onClick={handleSubmit(onSubmit)}
        />
      </div>
    </div>
  );
};

export default RegisterForm;
