import {Form, usePage} from '@inertiajs/react';
import { listShare } from '@/routes';
import type { PaginatedListItems, ListItem, ListContact, List } from '@/types';
import { SubmitBtn } from '@/components/forms/submit-btn';

interface ShareListProps {
    list: List
    contacts: ListContact[],
    items: PaginatedListItems,
}

export default function ShareListForm() {
    const page = usePage<ShareListProps>();
    const { list, contacts, items } = page.props;

    if (contacts.length === 0 || items.data.length === 0) {
        return;
    }

    return (
        <details className="shadow-lg rounded-lg bg-white w-full max-w-[335px] lg:max-w-4xl mb-20">
            <summary className="cursor-pointer px-6 py-4 text-2xl text-[#336b87]">
                Share {list.name}
            </summary>

            <Form
                action={listShare({list: list.id})}
                method="post"
                className="p-6"
            >
                {({ errors, processing }) => (
                    <>
                        {contacts.map((item) => (
                            <label htmlFor={`contact_${item.id}`} className="w-full inline-flex items-center mt-4 cursor-pointer" key={item.id}>
                                <input id={`contact_${item.id}`} defaultChecked={item.shared} type="checkbox" className="form-checkbox h-4 w-4 text-[#336b87] focus:outline-none" name="contacts[]" value={item.id} />
                                <span className="ml-2 text-sm">
                                    {item.name} - <span className="text-gray-400">{item.listLabel}</span>
                                </span>
                            </label>
                        ))}

                        <p className="mt-2 text-sm text-gray-400">When you save your changes an email will be sent to any contacts who have not yet received an email.</p>

                        <div className="flex justify-end mt-4">
                            <SubmitBtn processing={processing}>Save Changes</SubmitBtn>
                        </div>
                    </>
                )}
            </Form>
        </details>
    );
}