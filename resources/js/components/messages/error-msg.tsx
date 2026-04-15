import { usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';

interface ErrorMsgProps {
    message?: string | null;
}

type AppPageProps = {
    flash?: {
        error?: string | null;
    };
};

export default function ErrorMsg({ message }: ErrorMsgProps) {
    const { flash } = usePage().props as AppPageProps;

    const resolvedMessage = message ?? flash?.error ?? null;

    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, [resolvedMessage]);

    if (!resolvedMessage) return null;

    return (
        <div
            className={`
                fixed top-4 right-4 z-50
                w-96 max-w-[90vw]
                rounded-lg bg-red-800 text-white
                shadow-lg
                transform transition-all duration-500 ease-in-out
                ${visible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
            `}
        >
            <div className="flex items-center justify-between px-4 py-3">
                <span className="pr-4">{resolvedMessage}</span>

                <button
                    onClick={() => setVisible(false)}
                    className="text-white hover:opacity-70 transition-opacity cursor-pointer"
                >
                    ✕
                </button>
            </div>
        </div>
    );
}