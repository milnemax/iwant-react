import { Form, Link } from '@inertiajs/react';

import { logout } from "@/routes";
import { request } from "@/routes/password";
import { send } from '@/routes/verification';

import { SubmitBtn } from '../submit-btn';

export default function ResendVerifyEmailForm() {
    return (
        <Form
            {...send.form()}
            resetOnSuccess
            className="shadow-lg rounded-lg bg-white w-full max-w-[335px] lg:max-w-4xl p-6 my-20"
        >
            {({ processing }) => (
                <>
                    <div className="mb-4 text-sm text-gray-600">Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another.</div>

                    <div className="flex justify-between mt-4">
                        <Link href={logout()} className="underline text-[#336b87] hover:text-gray-700" aria-label="Log out">Log out</Link>

                        <SubmitBtn processing={processing}>Resend verification email</SubmitBtn>
                    </div>
                </>
            )}
        </Form>
    );
}