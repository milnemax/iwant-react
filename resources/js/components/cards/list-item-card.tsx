import { Link } from '@inertiajs/react';
import { listItemEdit } from '@/routes';
import type { ListItem } from '@/types';
import { Pointer, Trash2 } from 'lucide-react';

interface ListCardProps {
    listItem: ListItem,
    onDeleteClick: (item: ListItem) => void
}

export default function ListItemCard({ listItem, onDeleteClick }: ListCardProps) {
    return (
        <div className="flex w-full my-2 border border-gray-500 rounded-lg shadow-lg p-4 cursor-pointer bg-white items-center">
            <Link href={listItemEdit({ list: listItem.wish_list_id, item: listItem.id })} title={`Edit ${listItem.name}`} className="grow flex hover:bg-gray-100 items-center">
                <Pointer className="text-xl text-[#336b87] mr-4 ml-2"/>
                <div>
                    <p>{listItem.list_item_category.name} - {listItem.name}</p>
                    {listItem.url && (<p className="text-gray-500 text-sm">{listItem.url}</p>)}
                    <p className="text-gray-500 text-sm">{listItem.description}</p>
                </div>
            </Link>
            <div
                aria-label={`Delete ${listItem.name}`}
                className="flex hover:bg-gray-100 items-center"
                onClick={() => onDeleteClick(listItem)}
            >
                <Trash2 className="text-xl text-red-500 m-3"/>
            </div>
        </div>
    );
}


