"use client";

import { usePathname, useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import { routes } from "@/utils/RoutesSidebar";

const Sidebar = () => {
  // ============= Router ===============
  const router = useRouter();

  // ============= Pathname ===============
  const pathname = usePathname();

  // ============= Navigation Function ===============
  const onNavigate = (url: string, pro: boolean) => {
    console.log(pro);
    return router.push(url);
  };

  // ============= Rendering ===============
  return (
    <div className="space-y-4 flex flex-col h-full text-primary bg-secondary">
      <div className="p-3 flex flex-1 justify-center">
        <div className="space-y-2">
          {routes.map((route) => (
            <div
              onClick={() => onNavigate(route.href, route.pro)}
              key={uuidv4()}
              className={`${
                pathname === route.href && "bg-primary/10 text-primary"
              } text-muted-foreground text-xs group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition`}
            >
              <div className="flex flex-col gap-y-2 items-center flex-1">
                <route.icon className="h-5 w-5" />
                {route.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
