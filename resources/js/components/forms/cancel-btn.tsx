import { cn } from "@/lib/utils"

type CancelBtnProps = React.ComponentProps<"button"> & {
    buttonClick: () => void,
};

function CancelBtn({
    buttonClick,
    className = "",
    children,
}: CancelBtnProps)
{
    return (
        <button
            type="button"
            onClick={() => buttonClick()}
            className={ cn("text-white border border-gray-400 bg-gray-400 py-2 px-3 rounded hover:text-gray-300 hover:bg-gray-600 cursor-pointer flex items-center", className) }
        >
            {children}
        </button>
    )
}

export { CancelBtn }