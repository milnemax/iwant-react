import { Form } from '@inertiajs/react';
import { verifySharedListForm } from '@/routes';
import { PrimaryBtn } from '@/components/forms/primary-btn';

export default function VerifySharedListCodeForm() {
    return (
        <Form
            action={verifySharedListForm()}
            method="post"
            className="shadow-lg rounded-lg bg-white w-full w-full max-w-[335px] lg:max-w-4xl p-6 my-20"
        >
            {({ errors, processing }) => (
                <>
                    <div>
                        <label className="block" htmlFor="view_list_code">
                            If you have been sent a code enter it below to view the list.
                        </label>

                        <input
                            id="view_list_code"
                            name="view_list_code"
                            type="text"
                            className="w-full border mt-1 text-gray-500 p-1 focus:outline-none"
                            maxLength={15}
                        />

                        {errors.view_list_code && (
                            <p className="text-sm text-red-600">
                                {errors.view_list_code}
                            </p>
                        )}
                    </div>

                    <div className="text-right mt-4">
                        <PrimaryBtn processing={processing}>View Shared List</PrimaryBtn>
                    </div>
                </>
            )}
        </Form>
    );
}