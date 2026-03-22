import * as React from "react";
import { Loader2Icon } from "lucide-react"
import { cn } from "@/lib/utils"

type SubmitBtnProps = React.ComponentProps<"button"> & {
    processing?: boolean;
};

function SubmitBtn({
    processing = false,
    className = "",
    children,
    ...props
}: SubmitBtnProps)
{
    return (
        <button
            type="submit"
            disabled={processing || props.disabled}
            className={cn("bg-[#336b87] text-white hover:text-gray-300 hover:bg-[#21526b] py-2 px-3 rounded cursor-pointer flex items-center", className)}
        >
            {processing && (
                <Loader2Icon
                    role="status"
                    aria-label="Loading"
                    className="size-4 animate-spin mr-1"
                />
            )}
            {children}
        </button>
    )
}

export { SubmitBtn }