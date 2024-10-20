"use client";

import { ChangeEventHandler, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useDebounce } from "@/hooks/use-debounce";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

import qs from "query-string";

const SearchInput = () => {
  // =========== Router ===========
  const router = useRouter();

  // =========== Params ===========
  const searchParams = useSearchParams();
  const categoryId = searchParams.get("categoryId");
  const name = searchParams.get("name");

  // =========== State ===========
  const [value, setValue] = useState(name || "");

  // =========== Debounced ===========
  const debouncedValue = useDebounce<string>(value, 500);

  // =========== Change Function ===========
  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.target.value);
  };

  // =========== Effect ===========
  useEffect(() => {
    const query = {
      name: debouncedValue,
      categoryId: categoryId,
    };
    const url = qs.stringifyUrl(
      { url: window.location.href, query },
      { skipEmptyString: true, skipNull: true }
    );
    router.push(url);
  }, [debouncedValue, router, categoryId]);

  // =========== Rendering ===========
  return (
    <div className="relative">
      <Search className="absolute h-4 w-4 top-3 left-4 text-muted-foreground" />
      <Input
        value={value}
        onChange={onChange}
        placeholder="Search ..."
        className="pl-10 bg-primary/10"
      />
    </div>
  );
};

export default SearchInput;
