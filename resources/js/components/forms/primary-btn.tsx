import { Loader2Icon } from "lucide-react"

import type { LucideIcon } from "lucide-react";

type PrimaryBtnProps = React.ComponentProps<"button"> & {
    processing?: boolean,
    buttonClick: () => void,
    icon?: LucideIcon | null,
};

function PrimaryBtn({
    processing = false,
    buttonClick,
    className = "",
    icon: Icon = null,
    children,
    ...props
}: PrimaryBtnProps)
{
    return (
        <button
            type="button"
            onClick={() => buttonClick()}
            disabled={processing || props.disabled}
            className="
            bg-[#336b87] hover:bg-[#21526b] disabled:bg-gray-500 disabled:hover:bg-gray-500
            text-white hover:text-gray-300 disabled:text-gray-300 disabled:hover:text-gray-300
            rounded px-3 py-2 flex gap-2 items-center cursor-pointer"
        >
            {processing ? (
                <Loader2Icon
                    role="status"
                    aria-label="Loading"
                    className="size-4 animate-spin mr-1"
                />
            ) : (
                Icon && (
                    <Icon className="text-lg" />
                )
            )}
            {children}
        </button>
    )
}

export { PrimaryBtn }