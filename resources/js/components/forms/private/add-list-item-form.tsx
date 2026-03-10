import {Form, usePage} from '@inertiajs/react';
import { listItemsStore } from '@/routes';
import type { List } from '@/types';
import { SubmitBtn } from '@/components/forms/submit-btn';
import { LookUpField } from "@/components/forms/lookup-field";

interface AddListProps {
    list: List,
}

export default function AddListForm() {
    const { list } = usePage<AddListProps>().props;

    return (
        <Form
            action={listItemsStore({list: list.id})}
            resetOnSuccess
            method="post"
            className="shadow-lg rounded-lg bg-white w-full max-w-[335px] lg:max-w-4xl p-6 my-20"
        >
            {({ errors, processing }) => (
                <>
                    <h3 className="text-xl my-2">Add A New List Item</h3>

                    <label className="block" htmlFor="item_name">Name</label>
                    <input type="text" name="item_name" className="w-full border mt-1 text-gray-500 p-1 focus:outline-none" required autoFocus />
                    {errors.item_name && ( <p className="text-sm text-red-600">You must provide a unique name for your item.</p>)}

                    <div className="grid md:grid-cols-2 gap-2 mt-2 mb-4">
                        <div>
                            <LookUpField errors={errors} fieldName="item_category" labelText="Category" />
                        </div>
                        <div>
                            <label className="block" htmlFor="item_url">Url <span className="text-sm text-gray-500"> ( optional ) </span></label>
                            <input type="text" name="item_url" className="w-full border mt-1 text-gray-500 p-1 focus:outline-none" />
                            {errors.item_url && ( <p className="text-sm text-red-600">Include the full url e.g. https://...</p>)}
                        </div>
                    </div>

                    <label className="block mt-2" htmlFor="item_description">Description</label>
                    <textarea className="border mt-1 text-gray-500 p-1 w-full focus:outline-none" name="item_description" rows={5} autoFocus></textarea>
                    {errors.item_description && ( <p class="text-sm text-red-600">You must provide a description for your item.</p>)}

                    <div className="flex justify-end mt-4">
                        <SubmitBtn processing={processing}>Add List Item</SubmitBtn>
                    </div>
                </>
            )}
        </Form>
    );
}