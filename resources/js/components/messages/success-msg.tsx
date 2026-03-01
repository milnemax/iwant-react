import { useEffect, useState } from 'react';
import { usePage } from '@inertiajs/react';

export default function SuccessMsg() {
    const { flash } = usePage().props as any;

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (flash?.success) {
            setVisible(true);

            const timer = setTimeout(() => {
                setVisible(false);
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [flash?.success]);

    if (!flash?.success) return null;

    return (
        <div
            className={`
                fixed top-4 right-4 z-50
                w-96 max-w-[90vw]
                rounded-lg bg-green-800 text-white
                shadow-lg
                transform transition-all duration-500 ease-in-out
                ${visible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
            `}
        >
            <div className="flex items-center justify-between px-4 py-3">
                <span className="pr-4">{flash.success}</span>

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