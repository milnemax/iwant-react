import { useState } from 'react';

import { Eye, EyeOff } from 'lucide-react';

interface PasswordFieldProps {
    fieldName: string;
    autoComplete?: string;
};

function PasswordField({
    fieldName,
    autoComplete = 'off',
}: PasswordFieldProps)
{
    const [show, setShow] = useState(false);

    return (
        <div className="relative">
            <input
                type={show ? 'text' : 'password'}
                id={fieldName}
                name={fieldName}
                className="w-full border mt-1 text-gray-500 p-1 focus:outline-none pr-10"
                required
                autoComplete={autoComplete}
            />
            <button
                type="button"
                onClick={() => setShow(prev => !prev)}
                className="absolute right-2 top-0 bottom-0 text-gray-600"
                aria-label={show ? 'Hide password' : 'Show password'}
            >
                {show ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
        </div>
    )
}

export { PasswordField }