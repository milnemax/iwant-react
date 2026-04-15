import { Link } from "@inertiajs/react";

import type { PaginationLink } from '@/types';

interface PaginationProps {
    links: PaginationLink[],
}

export default function Pagination({ links }: PaginationProps) {
    if (!links || links.length <= 3) {
        return null
    }

    return (
        <ul className="flex gap-4 my-4">
            {links.map((link, index) => (
                <li key={index} className={`shadow-lg rounded-lg flex items-center justify-center p-2 ${link.active ? "bg-[#336b87] text-white" : "bg-white hover:bg-gray-100"}`}>
                    {link.url ? (
                        <Link
                            href={link.url}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                        />
                    ) : (
                        <span
                            dangerouslySetInnerHTML={{ __html: link.label }}
                        />
                    )}
                </li>
            ))}
        </ul>
    );
}
