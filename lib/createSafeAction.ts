import { z } from "zod";

export type FieldErrors<T> = {
  [K in keyof T]?: string[];
};

export type ActionState<TInput, TOutPut> = {
  fieldErrors?: FieldErrors<TInput>;
  error?: string | null;
  data?: TOutPut;
};

export const createSafeAction = <TInput, TOutPut>(
  schema: z.Schema<TInput>,
  handler: (data: TInput) => Promise<ActionState<TInput, TOutPut>>,
) => {
  return async (data: TInput): Promise<ActionState<TInput, TOutPut>> => {
    const validationResult = schema.safeParse(data);
    if (!validationResult.success) {
      return {
        fieldErrors: validationResult.error.flatten()
          .fieldErrors as FieldErrors<TInput>,
      };
    }
    return handler(validationResult.data);
  };
};
