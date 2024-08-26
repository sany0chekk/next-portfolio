import { cn } from "@/lib/utils";

interface Params {
  className?: string;
  children: React.ReactNode;
}

const Container: React.FC<Params> = ({ className, children }) => {
  return (
    <div
      className={cn(
        "max-w-screen-sm md:max-w-screen-md lg:max-w-[850px] mx-auto p-4",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
