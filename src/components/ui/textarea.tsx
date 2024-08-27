import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[95px] bg-card/65 w-full rounded-md px-3 py-2 shadow-md placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--blue-300] disabled:cursor-not-allowed disabled:opacity-50 border border-slate-200",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };
