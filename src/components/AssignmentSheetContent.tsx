import type { ComponentProps } from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog@1.1.6";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { X } from "lucide-react";

type Props = ComponentProps<typeof SheetPrimitive.Content> & { open: boolean };

export function AssignmentSheetContent({ open, children, ...props }: Props) {
  const reduceMotion = useReducedMotion();
  return <SheetPrimitive.Portal forceMount>
    <AnimatePresence initial={false}>
      {open && <SheetPrimitive.Overlay key="overlay" forceMount asChild>
        <motion.div className="assignment-sheet-overlay"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.2, ease: "easeOut" }} />
      </SheetPrimitive.Overlay>}
      {open && <SheetPrimitive.Content key="panel" forceMount asChild {...props}>
        <motion.div data-slot="sheet-content"
          initial={{ x: reduceMotion ? 0 : "100%" }}
          animate={{ x: 0, transition: { duration: reduceMotion ? 0 : 0.25, ease: "easeOut" } }}
          exit={{ x: reduceMotion ? 0 : "100%", transition: { duration: reduceMotion ? 0 : 0.15, ease: "easeOut" } }}>
          {children}
          <SheetPrimitive.Close aria-label="Close task assignment"><X size={16} aria-hidden="true" /></SheetPrimitive.Close>
        </motion.div>
      </SheetPrimitive.Content>}
    </AnimatePresence>
  </SheetPrimitive.Portal>;
}
