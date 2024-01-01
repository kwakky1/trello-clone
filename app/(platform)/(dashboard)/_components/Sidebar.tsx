"use client";

import Link from "next/link";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Accordion } from "@/components/ui/accordion";
import { useState } from "react";

interface SidebarProps {
  storageKey?: string;
}

export const Sidebar = ({ storageKey = "st-sidebar-state" }: SidebarProps) => {
  /*const [expand, setExpand] = useState(storageKey, {});*/

  return (
    <>
      <div className={"font-medium text-xs flex items-center mb-1"}>
        <span className={"pl-4"}>Workspaces</span>
      </div>
      <Button asChild variant={"ghost"}>
        <Link href={"/select-pg"}>
          <Plus className={"h-4 w-4"} />
        </Link>
      </Button>
    </>
  );
};
