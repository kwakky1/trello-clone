"use server";

import { InputType, ReturnType } from "@/actions/board/types";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { createSafeAction } from "@/lib/createSafeAction";
import { CreateBoard } from "@/actions/board/schema";

const handler = async (data: InputType): Promise<ReturnType> => {
  const { title } = data;

  let board;

  try {
    board = await db.board.create({
      data: {
        title,
      },
    });
  } catch (e) {
    return {
      error: "Failed to Create",
    };
  }

  revalidatePath(`/board/${board.id}`);
  return { data: board };
};

export const createBoard = createSafeAction(CreateBoard, handler);
