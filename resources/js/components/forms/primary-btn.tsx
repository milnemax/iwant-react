import * as React from "react";

type PrimaryBtnProps = React.ComponentProps<"button"> & {
    processing?: boolean;
};

function PrimaryBtn({
    processing = false,
    className = "",
    children,
    ...props
}: PrimaryBtnProps)
{
    return (
        <button
            type="submit"
            disabled={processing || props.disabled}
            className="text-white border border-gray-700 bg-gray-700 py-2 px-3 rounded hover:text-gray-300 hover:bg-gray-600"
        >
            {children}
        </button>
    )
}

export { PrimaryBtn }