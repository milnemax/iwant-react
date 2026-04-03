import type { InertiaLinkProps } from '@inertiajs/react';
import { useEffect } from 'react';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function toUrl(url: NonNullable<InertiaLinkProps['href']>): string {
    return typeof url === 'string' ? url : url.url;
}

export function formatDate(date: string | null): string {
    if (!date) return '—'

    return new Date(date).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    })
}

export function mapMonth(month: number): string {
    const months = [
        '', // placeholder so index matches month number
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    return months[month] ?? 'December';
}

export function useClickAway(
    ref: React.RefObject<HTMLElement>,
    handler: () => void
) {
    useEffect(() => {
        const listener = (event: MouseEvent) => {
            if (!ref.current || ref.current.contains(event.target as Node)) {
                return;
            }

            handler();
        };

        document.addEventListener('mousedown', listener);

        return () => {
            document.removeEventListener('mousedown', listener);
        };
    }, [ref, handler]);
}