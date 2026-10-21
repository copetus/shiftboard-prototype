import { useState, useRef, useEffect } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./ui/popover";

interface TagsWithOverflowProps {
  tags: string[];
}

export function TagsWithOverflow({ tags }: TagsWithOverflowProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);
  const overflowMeasureRef = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(tags.length);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const calculateVisibleTags = () => {
      if (!containerRef.current || !measureRef.current || !overflowMeasureRef.current || tags.length === 0) {
        return;
      }

      const containerWidth = containerRef.current.offsetWidth;
      const gap = 6; // Gap between tags

      // Get all tag elements from the hidden measurement container
      const tagElements = Array.from(measureRef.current.children) as HTMLElement[];
      
      let totalWidth = 0;
      let count = 0;

      // Try to fit all tags first
      for (let i = 0; i < tagElements.length; i++) {
        const tagWidth = tagElements[i].offsetWidth;
        const widthWithGap = totalWidth + tagWidth + (i > 0 ? gap : 0);
        
        if (widthWithGap <= containerWidth) {
          totalWidth = widthWithGap;
          count++;
        } else {
          break;
        }
      }

      // If not all tags fit, reserve space for the +N badge
      if (count < tags.length) {
        totalWidth = 0;
        count = 0;
        
        for (let i = 0; i < tagElements.length; i++) {
          const tagWidth = tagElements[i].offsetWidth;
          const widthWithGap = totalWidth + tagWidth + (i > 0 ? gap : 0);
          const needsOverflowBadge = i < tagElements.length - 1;
          overflowMeasureRef.current.firstElementChild!.textContent = `+${tags.length - i - 1}`;
          const overflowBadgeWidth = overflowMeasureRef.current.offsetWidth;
          const totalNeeded = widthWithGap + (needsOverflowBadge ? gap + overflowBadgeWidth : 0);
          
          if (totalNeeded <= containerWidth) {
            totalWidth = widthWithGap;
            count++;
          } else {
            break;
          }
        }
      }



      setVisibleCount(count);
    };

    // Initial calculation
    calculateVisibleTags();

    // Recalculate on resize
    const resizeObserver = new ResizeObserver(() => {
      calculateVisibleTags();
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
      if (measureRef.current) resizeObserver.observe(measureRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [tags]);

  const visibleTags = tags.slice(0, visibleCount);
  const hiddenTags = tags.slice(visibleCount);
  const overflowCount = hiddenTags.length;

  return (
    <>
      <div ref={overflowMeasureRef} className="duty-tag" aria-hidden="true" style={{ position: "fixed", top: -9999, left: -9999, width: "max-content", visibility: "hidden", pointerEvents: "none" }}><p>+{tags.length}</p></div>
      {/* Hidden measurement container - rendered off-screen to measure tag widths */}
      <div
        ref={measureRef}
        className="duty-tag-measure fixed opacity-0 pointer-events-none flex gap-[8px] items-center"
        style={{ top: -9999, left: -9999 }}
        aria-hidden="true"
      >
        {tags.map((tag, index) => (
          <div
            key={index}
            className="duty-tag bg-[#f7f8f9] box-border flex gap-[4px] items-center justify-end px-[8px] py-[4px] rounded-[6px] border border-[#cccfd4] whitespace-nowrap"
          >
            <p className="font-['DM_Sans'] font-semibold text-[#282e38] text-[16px]" style={{ fontVariationSettings: "'opsz' 14" }}>
              {tag}
            </p>
          </div>
        ))}
      </div>

      {/* Actual visible container */}
      <div ref={containerRef} className="duty-tag-row flex gap-[8px] items-center w-full">
        {visibleTags.map((tag, index) => (
          <div
            key={index}
            className="duty-tag bg-[#f7f8f9] box-border flex gap-[4px] items-center justify-end px-[8px] py-[4px] rounded-[6px] border border-[#cccfd4] shrink-0"
          >
            <p className="font-['DM_Sans'] font-semibold text-[#282e38] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
              {tag}
            </p>
          </div>
        ))}

        {overflowCount > 0 && (
          <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger asChild>
              <button
                className="duty-tag bg-[#f7f8f9] box-border flex gap-[4px] items-center justify-end px-[8px] py-[4px] rounded-[6px] border border-[#cccfd4] hover:bg-[#eceef0] transition-colors shrink-0"
                aria-label={`Show ${overflowCount} more duty lists`}
              >
                <p className="font-['DM_Sans'] font-semibold text-[#282e38] text-[16px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                  +{overflowCount}
                </p>
              </button>
            </PopoverTrigger>
            <PopoverContent
              className="w-auto max-w-[320px] p-0 bg-white rounded-[8px] border border-[#d9dbde] shadow-[0px_1px_3px_0px_#c0c1c3,0px_0px_1px_0px_#9a9ca0]"
              align="start"

            >
              <div className="box-border flex flex-wrap gap-[12px] items-start p-[12px]">
                {hiddenTags.map((tag, index) => (
                  <div
                    key={index}
                    className="duty-tag bg-[#f7f8f9] box-border relative flex gap-[4px] items-center justify-end px-[8px] py-[4px] rounded-[6px] shrink-0"
                  >
                    <div aria-hidden="true" className="absolute border border-[#cccfd4] border-solid inset-0 pointer-events-none rounded-[6px]" />
                    <div className="flex flex-col font-['DM_Sans'] font-semibold justify-center leading-[0] relative shrink-0 text-[#282e38] text-[16px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                      <p className="leading-[normal] whitespace-pre">{tag}</p>
                    </div>
                  </div>
                ))}
              </div>
            </PopoverContent>
          </Popover>
        )}
      </div>
    </>
  );
}
