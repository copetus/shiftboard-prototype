import { Skeleton } from "./ui/skeleton";

export function EmployeeCardSkeleton() {
  return (
    <div className="flex-1 bg-white box-border flex flex-col items-start min-h-px min-w-px rounded-[8px] shadow-[0px_1px_3px_0px_#c0c1c3,0px_0px_1px_0px_#9a9ca0]">
      {/* Topbar */}
      <div className="bg-[#f7f8f9] relative rounded-tl-[8px] rounded-tr-[8px] w-full border-b border-[#cccfd4]">
        <div className="box-border flex gap-[10px] items-center px-[16px] py-[8px] w-full">
          <div className="flex-1">
            <Skeleton className="h-[21px] w-[180px]" />
          </div>
          <Skeleton className="h-[24px] w-[24px] rounded-[6px]" />
        </div>
      </div>

      {/* Content */}
      <div className="relative w-full">
        <div className="box-border flex flex-col gap-[8px] items-start p-[8px] w-full">
          {/* Operator Section */}
          <div className="w-full">
            <div className="box-border flex flex-col gap-[10px] items-start justify-center p-[8px] w-full">
              {/* Name and Status */}
              <div className="flex gap-[10px] items-start w-full">
                <div className="flex-1 flex flex-col gap-[2px] items-start">
                  <Skeleton className="h-[27px] w-[140px]" />
                  <Skeleton className="h-[21px] w-[100px]" />
                </div>
                <Skeleton className="h-[32px] w-[90px] rounded-[6px]" />
              </div>

              {/* Location */}
              <div className="h-[24px] flex items-center gap-[3px] w-full">
                <Skeleton className="h-[24px] w-[24px]" />
                <Skeleton className="h-[21px] w-[120px]" />
              </div>
            </div>
          </div>

          {/* Work Status */}
          <div className="bg-white relative rounded-[8px] w-full border border-[#d9dbde]">
            <div className="box-border flex flex-col gap-[8px] items-start p-[8px] w-full">
              {/* Progress Section */}
              <div className="flex flex-col gap-[8px] items-start w-full">
                <Skeleton className="h-[27px] w-[100px]" />
                
                {/* Progress Bar */}
                <div className="flex flex-col gap-[8px] items-start w-full">
                  <Skeleton className="h-[8px] w-full rounded-[8px]" />
                  <Skeleton className="h-[24px] w-[120px]" />
                </div>
              </div>

              {/* Tags */}
              <div className="flex gap-[8px] items-center flex-wrap">
                <Skeleton className="h-[28px] w-[100px] rounded-[4px]" />
                <Skeleton className="h-[28px] w-[80px] rounded-[4px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
