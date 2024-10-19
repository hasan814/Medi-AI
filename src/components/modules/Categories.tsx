"use client";

import { CategoriesProps } from "@/types";
import { v4 as uuidv4 } from "uuid";
import { cn } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";

const Categories = ({ data }: CategoriesProps) => {
  // ============== Router ===============
  const router = useRouter();

  // ============== Params ===============
  const searchParams = useSearchParams();
  const categoryId = searchParams.get("categoryId");

  // ============== Click Function ===============
  const onClick = (id: string | undefined) => {
    const query = { categoryId: id };
    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    );
    router.push(url);
  };

  // ============== Router ===============

  return (
    <div className="w-full overflow-x-auto space-x-2 flex p-1">
      <button
        onClick={() => onClick(undefined)}
        className={cn(
          `fle items-center text-center text-xs md:text-sm px-2 md:px-4 py-2 md:py-3
             rounded-md bg-primary/10 hover:opacity-75 transition`,
          !categoryId ? "bg-primary/25" : "bg-primary/10"
        )}
      >
        Newest
      </button>
      {data.map((item) => (
        <button
          key={uuidv4()}
          onClick={() => onClick(item.id)}
          className={cn(
            `fle items-center text-center text-xs md:text-sm px-2 md:px-4 py-2 md:py-3
               rounded-md bg-primary/10 hover:opacity-75 transition`,
            item.id === categoryId ? "bg-primary/25" : "bg-primary/10"
          )}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default Categories;
