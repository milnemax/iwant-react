import { Form } from '@inertiajs/react';

import { submitDataRequest } from '@/routes';

import { SubmitBtn } from '@/components/forms/submit-btn';

export default function DataRequestForm() {
    return (
        <Form
            action={submitDataRequest()}
            resetOnSuccess
            method="post"
            className="shadow-lg rounded-lg bg-white w-full max-w-[335px] lg:max-w-4xl p-6 my-20"
        >
            {({ errors, processing }) => (
                <>
                    <label className="block" htmlFor="data_request_email">Email</label>
                    <input type="email" name="data_request_email" className="w-full border mt-1 text-gray-500 p-1 focus:outline-none" required autoFocus />
                    {errors.data_request_email && ( <p className="text-sm text-red-600">{errors.data_request_email}</p>)}

                    <div className="flex justify-end mt-4">
                        <SubmitBtn processing={processing}>Request Data</SubmitBtn>
                    </div>
                </>
            )}
        </Form>
    );
}