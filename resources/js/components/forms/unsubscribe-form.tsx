import { Form } from '@inertiajs/react';
import { submitUnsubscribeForm } from '@/routes';
import { SubmitBtn } from '@/components/forms/submit-btn';

export default function UnsubscribeForm() {
    return (
        <Form
            action={submitUnsubscribeForm()}
            resetOnSuccess
            method="post"
            className="shadow-lg rounded-lg bg-white w-full max-w-[335px] lg:max-w-4xl p-6 my-20"
        >
            {({ errors, processing }) => (
                <>
                    <label className="block" htmlFor="unsubscribe_email">Email</label>
                    <input type="email" name="unsubscribe_email" className="w-full border mt-1 text-gray-500 p-1 focus:outline-none" required autoFocus />
                    {errors.unsubscribe_email && ( <p className="text-sm text-red-600">{errors.unsubscribe_email}</p>)}

                    <div className="flex justify-end mt-4">
                        <SubmitBtn processing={processing}>Unsubscribe</SubmitBtn>
                    </div>
                </>
            )}
        </Form>
    );
}