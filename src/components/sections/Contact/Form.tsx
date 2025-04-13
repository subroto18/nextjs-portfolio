import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import TextArea from "@/components/ui/TextArea";
import React from "react";

const Form = () => {
  return (
    <div>
      <h1 className="text-[4rem] font-bold text-white">Hire Me.</h1>
      <p className="text-[#94999c]">
        I am available for freelance work. Connect with me via phone:{" "}
        <strong>01923 088574</strong> or email:{" "}
        <strong>admin@example.com</strong>
      </p>
      <form className="my-5">
        <Input
          required={true}
          placeholder={"Your name *"}
          className="mb-4 py-4"
        />
        <Input
          required={true}
          placeholder={"Your Email *"}
          className="mb-4 py-4"
        />
        <Input
          required={false}
          placeholder={"Your Subject "}
          className="mb-4 py-4"
        />

        <TextArea
          required={false}
          placeholder={"Your Message"}
          className="mb-4 py-4"
          row={4}
        />

        <Button className="bg-[#fb004d] hover:bg-transparent text-red-400 border-0 hover:border-2 py-3 px-5 w-[8rem] border-[#fb004d]">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Form;
