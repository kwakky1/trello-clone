"use client";

import React from "react";
import { createBoard } from "@/actions/board/create";
import { FormInput } from "@/components/form/formInput";
import { useAction } from "@/hooks/useAction";
import FormSubmit from "@/components/form/formSubmit";

const Form = () => {
  const { execute, fieldErrors } = useAction(createBoard, {
    onSuccess: (data) => {
      console.log(data, "success");
    },
    onError: (error) => {
      console.log(error, "error");
    },
  });

  const onSubmit = async (forData: FormData) => {
    const title = forData.get("title") as string;

    await execute({ title });
  };
  return (
    <form action={onSubmit}>
      <div className={"flex flex-col space-y-2"}>
        <FormInput id={"title"} errors={fieldErrors} />
        <FormSubmit>Submit</FormSubmit>
      </div>
    </form>
  );
};

export default Form;
