import React from "react";
import { Button } from "@/components/ui/button";
import { deleteBoard } from "@/actions/board/delete";

interface BoardProps {
  title: string;
  id: string;
}

const Board = ({ title, id }: BoardProps) => {
  const deleteBoardWithId = deleteBoard.bind(null, id);

  return (
    <form action={deleteBoardWithId} className={"flex items-center gap-x-2"}>
      <p>{title}</p>
      <Button type={"submit"} variant={"destructive"} size={"sm"}>
        delete
      </Button>
    </form>
  );
};

export default Board;
