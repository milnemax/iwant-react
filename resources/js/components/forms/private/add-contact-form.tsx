import { Form } from '@inertiajs/react';
import { contactsStore } from '@/routes';
import { SubmitBtn } from '@/components/forms/submit-btn';

export default function AddContactForm() {
    return (
        <Form
            action={contactsStore()}
            resetOnSuccess
            method="post"
            className="shadow-lg rounded-lg bg-white w-full max-w-[335px] lg:max-w-4xl p-6 my-20"
        >
            {({ errors, processing }) => (
                <>
                    <h3 className="text-xl my-2">Add Contact</h3>

                    <label className="block" htmlFor="contact_name">Name</label>
                    <input type="text" name="contact_name" className="w-full border mt-1 text-gray-500 p-1 focus:outline-none" required autoFocus />
                    {errors.contact_name && ( <p className="text-sm text-red-600">{errors.contact_name}</p>)}

                    <label className="block mt-2" htmlFor="contact_email">Email</label>
                    <input type="email" name="contact_email" className="w-full border mt-1 text-gray-500 p-1 focus:outline-none" required />
                    {errors.contact_email && ( <p className="text-sm text-red-600">{errors.contact_email}</p>)}

                    <div className="flex justify-end mt-4">
                        <SubmitBtn processing={processing}>Add Contact</SubmitBtn>
                    </div>
                </>
            )}
        </Form>
    );
}