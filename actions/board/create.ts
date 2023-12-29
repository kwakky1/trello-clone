"use server";

import  {z} from 'zod';

import {db}  from '@/lib/db';

const CreateBoardSchema = z.object({
  title: z.string().min(3, {message: "Title must be at least 3 characters long."}),
});

export async function create(formData: FormData) {
  "use server";
  const title = formData.get('title') as string;

  await db.board.create({
    data: {
      title
    }
  })
}