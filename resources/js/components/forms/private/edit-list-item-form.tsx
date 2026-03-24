import {Form, usePage, router} from '@inertiajs/react';
import { listItemUpdate, listShow } from '@/routes';
import type { ListItem, List } from '@/types';
import { SubmitBtn } from '@/components/forms/submit-btn';
import { CancelBtn } from '@/components/forms/cancel-btn';
import { LookUpField } from "@/components/forms/lookup-field";

interface EditListItemProps {
    listItem: ListItem,
    list: List,
}

export default function EditListItemForm() {
    const { listItem, list } = usePage<EditListItemProps>().props;

    return (
        <Form
            action={listItemUpdate({list: list.id, item: listItem.id})}
            method="post"
            className="shadow-lg rounded-lg bg-white w-full max-w-[335px] lg:max-w-4xl p-6 my-20"
        >
            {({ errors, processing }) => (
                <>
                    <label className="block" htmlFor="item_name">Name</label>
                    <input type="text" name="item_name" className="w-full border mt-1 text-gray-500 p-1 focus:outline-none" defaultValue={listItem.name} required autoFocus />
                    {errors.item_name && ( <p className="text-sm text-red-600">You must provide a unique name for your item.</p>)}

                    <div className="grid md:grid-cols-2 gap-2 mt-2 mb-4">
                        <div>
                            <LookUpField errors={errors} fieldName="item_category" labelText="Category" defaultValue={listItem.list_item_category.name} />
                        </div>
                        <div>
                            <label className="block" htmlFor="item_url">Url <span className="text-sm text-gray-500"> ( optional ) </span></label>
                            <input type="text" name="item_url" className="w-full border mt-1 text-gray-500 p-1 focus:outline-none" defaultValue={listItem.url} />
                            {errors.item_url && ( <p className="text-sm text-red-600">Include the full url e.g. https://...</p>)}
                        </div>
                    </div>

                    <label className="block mt-2" htmlFor="item_description">Description</label>
                    <textarea className="border mt-1 text-gray-500 p-1 w-full focus:outline-none" name="item_description" rows={5} autoFocus defaultValue={listItem.description}></textarea>
                    {errors.item_description && ( <p class="text-sm text-red-600">You must provide a description for your item.</p>)}

                    <div className="flex justify-between mt-4">
                        <CancelBtn buttonClick={() => router.visit(listShow(list.id))}>Cancel</CancelBtn>
                        <SubmitBtn processing={processing}>Save List Item</SubmitBtn>
                    </div>
                </>
            )}
        </Form>
    );
}