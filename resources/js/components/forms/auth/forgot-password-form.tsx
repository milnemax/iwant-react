import { Form } from '@inertiajs/react';

import { email } from '@/routes/password';

import { SubmitBtn } from '@/components/forms/submit-btn';

export default function ForgotPasswordForm() {
    return (
        <Form
            action={email()}
            resetOnSuccess
            method="post"
            className="shadow-lg rounded-lg bg-white w-full max-w-[335px] lg:max-w-4xl p-6 my-20"
        >
            {({ errors, processing }) => (
                <>
                    <p className="text-sm">Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one.</p>

                    <label className="block mt-4" htmlFor="email">Email</label>
                    <input type="email" name="email" className="w-full border mt-1 text-gray-500 p-1 focus:outline-none" required autoFocus />
                    {errors.email && ( <p className="text-sm text-red-600">Your details do not match our records please check and try again.</p>)}

                    <div className="flex justify-end mt-4">
                        <SubmitBtn processing={processing}>Email password reset link</SubmitBtn>
                    </div>
                </>
            )}
        </Form>
    );
}