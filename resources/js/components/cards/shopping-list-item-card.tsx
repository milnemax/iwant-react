import type { ShoppingListItem } from '@/types';
import { CirclePoundSterling } from 'lucide-react';

interface ShoppingListItemCardProps {
    shoppingListItem: ShoppingListItem,
    onFlagAsBoughtClick: (itemId: number) => void
}

export default function ShoppingListItemCard({ shoppingListItem, onFlagAsBoughtClick }: ShoppingListItemCardProps) {
    return (
        <div key={`item_${shoppingListItem.listItem.id}`} className="flex my-2 border border-gray-500 rounded-lg shadow-lg p-2 bg-white">
            <div className="grow">
                <p>{shoppingListItem.listItem.list_item_category.name} - {shoppingListItem.listItem.name}</p>
                {shoppingListItem.listItem.url && (
                    <p className="text-gray-500 text-sm">
                        <a className="underline" href={shoppingListItem.listItem.url} target="_blank" title={`Link to ${shoppingListItem.listItem.name}`}>{shoppingListItem.listItem.url}</a>
                    </p>
                )}
                <p className="text-gray-500 text-sm">{shoppingListItem.listItem.description}</p>
                {shoppingListItem.bought && (
                    <p className="text-green-500 text-sm">( bought )</p>
                )}
            </div>
            {!shoppingListItem.bought && (
                <div
                    aria-label={`Mark ${shoppingListItem.listItem.name} as bought`}
                    className="flex hover:bg-gray-100 items-center cursor-pointer"
                    onClick={() => onFlagAsBoughtClick(shoppingListItem.listItem.id)}
                >
                    <CirclePoundSterling className="text-xl text-[#336b87] m-3" />
                </div>
            )}
        </div>
    );
}


