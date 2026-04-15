import {Form} from '@inertiajs/react';

import { store } from '@/routes/password/confirm';

import { PasswordField } from "@/components/forms/password-field";
import { SubmitBtn } from '@/components/forms/submit-btn';

export default function ConfirmPasswordForm() {
    return (
        <Form
            action={store()}
            resetOnSuccess
            resetOnError
            method="put"
            className="shadow-lg rounded-lg bg-white w-full max-w-[335px] lg:max-w-4xl p-6 my-10"
        >
            {({ errors, processing }) => (
                <>
                    <h3 className="text-xl my-2">Confirm Your Password</h3>

                    <label className="block mt-4" htmlFor="password">Password</label>
                    <PasswordField fieldName="password" autoComplete="current-password" />
                    {errors.password && ( <p className="text-sm text-red-600">{errors.password}</p>)}

                    <div className="flex justify-end mt-4">
                        <SubmitBtn processing={processing}>Confirm Password</SubmitBtn>
                    </div>
                </>
            )}
        </Form>
    );
}