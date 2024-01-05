import React, { useState } from "react";
import Input from "../Input";
import { CheckoutInput, checkoutInput } from "../../schema/checkout";
import { message } from "antd";
import { useLocation } from "react-router-dom";

const Checkout: React.FC = () => {
  const location = useLocation();

  const { totalPrice } = location.state;

  const [formData, setFormData] = useState<CheckoutInput>({
    email: "",
    city: "",
    streetNo: "",
  });

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationResult = checkoutInput.safeParse(formData);

    if (validationResult.success) {
      const validatedData = validationResult.data;
      console.log("Form data:", validatedData);
      setFormData({
        email: "",
        city: "",
        streetNo: "",
      });
    } else {
      validationResult.error.errors.forEach((error) => {
        const errorMessage = error.message;
        if (errorMessage) {
          message.error(errorMessage);
        }
      });
    }
  };

  return (
    <div className="flex justify-center items-center h-[684px] bg-slate-800">
      <div className="h-[500px] w-[500px] bg-slate-900 rounded-xl">
        <div className=" flex justify-center h-28 items-center">
          <strong className="text-white text-3xl">CHECKOUT</strong>
        </div>
        <form onSubmit={submitHandler}>
          <div className="flex justify-center items-center  h-[50px]">
            <Input
              className="focus:text-red-500"
              type="text"
              placeholder="enter your email here"
              value={formData.email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div className="flex justify-center items-center h-[50px]">
            <Input
              className=" focus:text-pink-500 "
              type="text"
              placeholder="enter your city here"
              value={formData.city}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFormData({ ...formData, city: e.target.value })
              }
            />
          </div>
          <div className="flex justify-center items-center h-[50px]">
            <Input
              className=" focus:text-green-500"
              type="text"
              placeholder="enter your street number here"
              value={formData.streetNo}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFormData({ ...formData, streetNo: e.target.value })
              }
            />
          </div>
          <div className="mt-9 flex justify-center ">
            <div className="w-[55%] flex justify-start">
              <span className="text-white font-semibold">
                Your total will be $ {totalPrice}
              </span>
            </div>
          </div>
          <div className="flex justify-center mt-12">
            <button className=" bg-blue-600 rounded-xl border-none h-8 w-[55%] hover:bg-blue-400">
              <strong className="text-white">PAY</strong>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
