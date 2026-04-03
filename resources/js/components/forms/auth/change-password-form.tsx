import {Form} from '@inertiajs/react';
import { useRef } from 'react';
import { passwordUpdate } from '@/routes';
import { SubmitBtn } from '@/components/forms/submit-btn';
import {PasswordField} from "@/components/forms/password-field";

export default function PersonalDetailsForm() {
    const passwordInterface = useRef<HTMLInputElement>(null);

    return (
        <Form
            action={passwordUpdate()}
            resetOnSuccess
            resetOnError
            onError={() => {
                passwordInterface.current?.focus();
            }}
            ref={passwordInterface}
            method="put"
            className="shadow-lg rounded-lg bg-white w-full max-w-[335px] lg:max-w-4xl p-6 my-10"
        >
            {({ errors, processing }) => (
                <>
                    <h3 className="text-xl my-2">Change Your Password</h3>

                    <label className="block" htmlFor="current_password">Current Password</label>
                    <p className="text-xs text-gray-400">Your password must be at least 6 characters and contain a upper case letter and a number.</p>
                    <PasswordField fieldName="current_password" />

                    <label className="block mt-4" htmlFor="password">New Password</label>
                    <p className="text-xs text-gray-400">Your password must be at least 6 characters and contain a upper case letter and a number.</p>
                    <PasswordField fieldName="password" />
                    {errors.password && ( <p className="text-sm text-red-600">Check your passwords match and they meet the criteria.</p>)}

                    <label className="block mt-4" htmlFor="password_confirmation">Confirm Password</label>
                    <PasswordField fieldName="password_confirmation" />

                    <div className="flex justify-end mt-4">
                        <SubmitBtn processing={processing}>Save Changes</SubmitBtn>
                    </div>
                </>
            )}
        </Form>
    );
}