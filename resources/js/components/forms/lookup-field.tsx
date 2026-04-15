import { useState, useEffect, useRef } from 'react';

import { useClickAway } from "@/lib/utils";

interface LookUpFieldProps {
    errors: Record<string, string>
    fieldName: string
    labelText: string
    defaultValue?: string
};

type Suggestion = {
    id: number
    name: string
};

function LookUpField({
    errors,
    fieldName,
    labelText,
    defaultValue,
}: LookUpFieldProps)
{
    const [fieldValue, setFieldValue] = useState(defaultValue ?? '');
    const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const lastSearchRef = useRef<string>('');

    const handleFieldChange = (value: string) => {
        setFieldValue(value);
    };

    useEffect(() => {
        const delay = setTimeout(() => {
            if (fieldValue === lastSearchRef.current) {
                return;
            }

            lastSearchRef.current = fieldValue;

            searchForSuggestions(fieldValue);
        }, 300);

        return () => clearTimeout(delay);
    }, [fieldValue]);

    const searchForSuggestions = async (term: string) => {
        if (term.length < 2 || term === (defaultValue ?? '')) {
            clearSuggestions();
            return;
        }

        try {
            const response = await fetch(`/look-up/search?name=${encodeURIComponent(fieldName)}&term=${encodeURIComponent(term)}`);
            const data = await response.json();
            setSuggestions(data);
            setShowSuggestions(true);
        } catch {
            clearSuggestions();
        }
    };

    const clearSuggestions = () => {
        setSuggestions([]);
        setShowSuggestions(false);
    };

    const wrapperRef = useRef<HTMLDivElement>(null);

    useClickAway(wrapperRef, () => { setShowSuggestions(false) });

    return (
        <div className="relative" ref={wrapperRef}>
            <label className="block" htmlFor={fieldName}>{labelText}</label>
            <input
                type="text"
                id={fieldName}
                name={fieldName}
                className="w-full border mt-1 text-gray-500 p-1 focus:outline-none"
                value={fieldValue}
                onChange={(e) => handleFieldChange(e.target.value)}
                onClick={() => { setShowSuggestions(true) }}
                autoComplete="off"
            />
            {errors[fieldName] && ( <p className="text-sm text-red-600">{errors[fieldName]}</p>)}

            {showSuggestions && suggestions.length > 0 && (
                <ul className="absolute bg-white border border-[#336b87] w-full mt-1 z-10 rounded-lg shadow-lg overflow-hidden">
                    {suggestions.map((item, index) => (
                        <li
                            key={`${index}_${encodeURIComponent(item.id)}`}
                            className="p-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => {
                                setFieldValue(item.name);
                                lastSearchRef.current = item.name;
                                clearSuggestions();
                            }}
                        >
                            {item.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export { LookUpField }