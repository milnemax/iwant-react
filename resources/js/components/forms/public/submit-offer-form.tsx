import { Form } from '@inertiajs/react';

import { sharedListOffer } from '@/routes';

import { SharedListItem } from "@/types/lists";

import Model from '@/components/model';

import { CancelBtn } from "@/components/forms/cancel-btn";
import { SubmitBtn } from '@/components/forms/submit-btn';

interface SubmitOfferFormProps {
    sharedListItem: SharedListItem,
    closeModelMethod: () => void,
    listId: number,
    code: string
}

export default function SubmitOfferForm({ sharedListItem, closeModelMethod, listId, code }: SubmitOfferFormProps) {
    if (!sharedListItem) { return; }

    return (
        <Model>
            <Form
                action={sharedListOffer({list: listId, code: code})}
                onSuccess={() => closeModelMethod()}
                method="post"
            >
                {({ errors, processing }) => (
                    <>
                        {sharedListItem.offers.length > 0 ? (
                            sharedListItem.offerByViewer ? (
                                <h2 className="mb-2 text-lg">Edit your offer</h2>
                            ) : (
                                <h2 className="mb-2 text-lg">Respond to this offer</h2>
                            )
                        ) : (
                            <h2 className="mb-2 text-lg">Add an offer</h2>
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

                        <input name="itemId" type="hidden" value={sharedListItem.listItem.id} />

                        <label className="block" htmlFor="message">Your Message</label>
                        <textarea className="border mt-1 text-gray-500 p-1 w-full focus:outline-none" id="message" name="message" rows={3} maxLength="250" autoFocus></textarea>
                        {errors.message && (
                            <p className="text-sm text-red-600">
                                {errors.message}
                            </p>
                        )}

                        <div className="flex justify-between mt-4">
                            <CancelBtn buttonClick={() => closeModelMethod()}>Cancel</CancelBtn>
                            <SubmitBtn processing={processing}>Save Offer</SubmitBtn>
                        </div>
                    </>
                )}
            </Form>
        </Model>
    );
}