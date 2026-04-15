import {Form} from '@inertiajs/react';

import { update } from '@/routes/password';

import { PasswordField } from "@/components/forms/password-field";
import { SubmitBtn } from '@/components/forms/submit-btn';

type Props = {
    token: string;
    email: string;
};

export default function ResetPasswordForm({ token, email }: Props) {
    return (
        <Form
            action={update()}
            transform={(data) => ({ ...data, token, email })}
            resetOnSuccess
            resetOnError
            method="put"
            className="shadow-lg rounded-lg bg-white w-full max-w-[335px] lg:max-w-4xl p-6 my-10"
        >
            {({ errors, processing }) => (
                <>
                    <h3 className="text-xl my-2">Reset Your Password</h3>

                    <label className="block" htmlFor="email">Email</label>
                    <input className="w-full border mt-1 text-gray-500 p-1 focus:outline-none" type="email" id="email" name="email" required autoFocus />
                    {errors.email && (
                        <p className="text-sm text-red-600">your details do not match our records please check and try again</p>
                    )}

                    <label className="block mt-4" htmlFor="password">New Password</label>
                    <p className="text-xs text-gray-400">Your password must be at least 6 characters and contain a upper case letter and a number.</p>
                    <PasswordField fieldName="password" autoComplete="new-password" />
                    {errors.password && ( <p className="text-sm text-red-600">Check your passwords match and they meet the criteria.</p>)}

                    <label className="block mt-4" htmlFor="password_confirmation">Confirm Password</label>
                    <PasswordField fieldName="password_confirmation" />

                    <div className="flex justify-end mt-4">
                        <SubmitBtn processing={processing}>Reset Password</SubmitBtn>
                    </div>
                </>
            )}
        </Form>
    );
}