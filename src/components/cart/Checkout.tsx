import React, { useState } from "react";
import Input from "../Input";
import { Button } from "antd";

const Checkout: React.FC = () => {
  interface Data {
    email: string;
    city: string;
    streetNo: string;
  }

  const [formData, setFormData] = useState<Data>({
    email: "",
    city: "",
    streetNo: "",
  });

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="flex justify-center align-center h-[90vh]">
      <div className="h-[500px] w-[500px] bg-slate-900 rounded-xl">
        <div className=" flex justify-center h-28 items-center">
          <strong className="text-white text-3xl">CHECKOUT</strong>
        </div>
        <form onSubmit={submitHandler}>
          <div className="flex justify-center items-center  h-[50px]">
            <Input
              className="focus:text-red-500 focus:outline-none"
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
              className=" focus:text-pink-500 focus:outline-none"
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
              className=" focus:text-green-500 focus:outline-none"
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
                Your total will be $ {99}
              </span>
            </div>
          </div>
          <div className="flex justify-center mt-12">
            <Button className=" bg-blue-600 rounded-xl border-none w-[55%]">
              <strong className="text-white">PAY</strong>
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
