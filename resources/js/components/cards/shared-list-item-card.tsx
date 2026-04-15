import {router} from "@inertiajs/react";

import { sharedListClaim } from '@/routes';

import type { SharedListItem, Contact } from '@/types';

import { CircleCheck, MessageCircleMore } from 'lucide-react';

import { PrimaryBtn} from "@/components/forms/primary-btn";

interface SharedListItemCardProps {
    sharedListItem: SharedListItem,
    contact: Contact,
    code: string,
    listId: number,
    openOfferForm: (item) => void,
}

export default function SharedListItemCard({ sharedListItem, contact, code, listId, openOfferForm }: SharedListItemCardProps) {
    const claimItem = (itemId: number) => {
        router.post(sharedListClaim({list: listId, code: code}), { itemId: itemId }, {
            preserveScroll: true,
        });
    };

    return (
        <div className="flex flex-wrap w-full my-2 border border-gray-500 rounded-lg shadow-lg p-4 bg-white items-end gap-2">
            <div className="grow">
                <p>{sharedListItem.listItem.list_item_category.name} - {sharedListItem.listItem.name}</p>
                {sharedListItem.listItem.url && (<p className="text-gray-500 text-sm">{sharedListItem.listItem.url}</p>)}
                <p className="text-gray-500 text-sm">{sharedListItem.listItem.description}</p>
                {sharedListItem.claimedBy === contact.id ? (
                    <p className="text-green-600 text-sm">Claimed by you</p>
                ) : (
                    sharedListItem.claimedBy > 0 && (
                        <p className="text-red-600 text-sm">Already claimed</p>
                    )
                )}
                {sharedListItem.offers.length > 0 && (
                    <>
                        <h2 className="my-2">Item Under Offer</h2>
                        <hr className="text-gray-500 mx-2"/>

                        {sharedListItem.offers.map((offer, index) => (
                            <div key={index}>
                                <p className="mx-3 text-sm">{offer.name}</p>
                                <p className="mx-3 mb-1 text-xs text-gray-500">{offer.message}</p>
                            </div>
                        ))}

                        <hr className="text-gray-500 mx-2 mb-2"/>
                    </>
                )}
            </div>
            <div className="flex gap-2 justify-end w-full lg:w-auto">
                <PrimaryBtn buttonClick={() => {claimItem(sharedListItem.listItem.id)}} icon={CircleCheck} disabled={sharedListItem.claimedBy > 0 || sharedListItem.offers.length > 0 }>
                    <span>Claim</span>
                </PrimaryBtn>
                <PrimaryBtn buttonClick={() => {openOfferForm(sharedListItem)}} icon={MessageCircleMore} disabled={sharedListItem.claimedBy > 0}>
                    <span>Add Offer</span>
                </PrimaryBtn>
            </div>
        </div>
    );
}
