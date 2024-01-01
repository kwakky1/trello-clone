import React from "react";
import { create } from "@/actions/board/create";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import Board from "@/app/(platform)/(dashboard)/organization/[organizationId]/board";
import Form from "@/app/(platform)/(dashboard)/_components/form";

const OrganizationIdPage = async () => {
  const boards = await db.board.findMany();
  return (
    <div className={"flex flex-col space-y-4"}>
      <Form />
      <div className={"space-y-4"}>
        {boards.map((board) => (
          <Board key={board.id} id={board.id} title={board.title} />
        ))}
      </div>
    </div>
  );
};

export default OrganizationIdPage;
