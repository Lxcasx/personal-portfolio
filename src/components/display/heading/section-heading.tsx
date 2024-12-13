type SectionHedingProps = {
  children: React.ReactNode;
  direction?: "row" | "column";
};

export const SectionHeading = ({ children, direction }: SectionHedingProps) => {
  if (direction === "row") {
    return (
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            {children}
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          {children}
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
    );
  }
};
