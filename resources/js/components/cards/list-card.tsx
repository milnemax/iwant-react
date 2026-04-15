import { Link } from '@inertiajs/react';

import { listShow } from '@/routes';

import type { List } from '@/types';

import { Pointer, Trash2 } from 'lucide-react';

import { formatDate } from '@/lib/utils';

interface ListCardProps {
    list: List,
    onDeleteClick: (list: List) => void
}

export default function ListCard({ list, onDeleteClick }: ListCardProps) {
    return (
        <div className="flex w-full my-2 border border-gray-500 rounded-lg shadow-lg p-4 cursor-pointer bg-white items-center">
            <Link href={listShow(list.id)} title={`Edit ${list.name}`} className="grow flex hover:bg-gray-100 items-center">
                <Pointer className="text-xl text-[#336b87] mr-4 ml-2"/>
                <div>
                    <p>{list.name} {list.contacts_exists ? (<span className="text-sm text-green-500 ml-1">(shared)</span>) : (<span className="text-sm text-red-500 ml-1">(not shared)</span>)}</p>
                    <p className="text-gray-500 text-sm">{list.list_type.name} - {formatDate(list.due_date)}</p>
                </div>
            </Link>
            <div
                aria-label={`Delete ${list.name}`}
                className="flex hover:bg-gray-100 items-center"
                onClick={() => onDeleteClick(list)}
            >
                 <Trash2 className="text-xl text-red-500 m-3"/>
            </div>
        </div>
    );
}


