"use client";

import { useFormStatus } from "react-dom";
import { Input } from "@/components/ui/input";

interface FormInputProps {
  errors?: {
    title?: string[];
  };
}

const FormInput = ({ errors }: FormInputProps) => {
  const { pending } = useFormStatus();

  return (
    <>
      <Input
        id="title"
        name="title"
        required
        placeholder={"Enter a board title"}
        className={"border-black border p-1"}
        disabled={pending}
      />
      {errors?.title ? (
        <div>
          {errors.title.map((error) => (
            <p key={error} className={"text-rose-500"}>
              {error}
            </p>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default FormInput;
