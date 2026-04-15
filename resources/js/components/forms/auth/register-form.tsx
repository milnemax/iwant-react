import { Form, Link } from '@inertiajs/react';

import { privacy } from '@/routes';
import { store } from '@/routes/register';

import { PasswordField } from "@/components/forms/password-field";
import { SubmitBtn } from '../submit-btn';

export default function RegisterForm() {
    return (
        <Form
            {...store.form()}
            resetOnSuccess={['password', 'password_confirmation']}
            disableWhileProcessing
            className="shadow-lg rounded-lg bg-white w-full max-w-[335px] lg:max-w-4xl p-6 my-20"
        >
            {({ errors, processing }) => (
                <>
                    <label className="block" htmlFor="name">Name</label>
                    <input className="w-full border mt-1 text-gray-500 p-1 focus:outline-none" type="text" id="name" name="name" required autoFocus />
                    <p className="text-sm text-gray-400">Your name is included in the emails we send to your friends and family, this is required to provide our service.</p>
                    {errors.name && (
                        <p className="text-sm text-red-600">You must enter a name.</p>
                    )}

                    <label className="block mt-3" htmlFor="email">Email</label>
                    <input className="w-full border mt-1 text-gray-500 p-1 focus:outline-none" type="email" id="email" name="email" required />
                    <p className="text-sm text-gray-400">Your email address is used as your login username, this is required to provide our service.</p>
                    {errors.email && (
                        <p className="text-sm text-red-600">You must enter a valid email address.</p>
                    )}

                    <label className="block mt-3" htmlFor="password">Password</label>
                    <PasswordField fieldName="password" autoComplete="new-password" />
                    {(errors.password || errors.password_confirmation) && (
                        <p className="text-sm text-red-600">Check your passwords match and they meet the criteria.</p>
                    )}

                    <label className="block mt-3" htmlFor="password_confirmation">Confirm Your Password</label>
                    <PasswordField fieldName="password_confirmation" autoComplete="off" />
                    <p className="text-sm text-gray-400">Your password must be at least 6 characters and contain a upper case letter and a number.</p>

                    <label htmlFor="publish_notifications" className="inline-flex items-center mt-4">
                        <input id="publish_notifications" type="checkbox" className="form-checkbox h-4 w-4 text-[#336b87] focus:outline-none" name="publish_notifications" value="1" />
                        <span className="ml-2 text-sm">Receive Notifications'</span>
                    </label>
                    <p className="text-sm text-gray-400">Provide permission for us to send you an email when a friend or family member publishes a list.</p>

                    <label htmlFor="offer_notifications" className="inline-flex items-center mt-4">
                        <input id="offer_notifications" type="checkbox" className="form-checkbox h-4 w-4 text-[#336b87] focus:outline-none" name="offer_notifications" value="1" />
                        <span className="ml-2 text-sm">Receive Offer Notifications'</span>
                    </label>
                    <p className="text-sm text-gray-400">Provide permission for us to send you an email when a friend or family member accepts an offer you made.</p>

                    <label htmlFor="terms" className="inline-flex items-center mt-4">
                        <input id="terms" type="checkbox" className="form-checkbox h-4 w-4 text-[#336b87] focus:outline-none" name="terms" />
                        <span className="ml-2 text-sm">Agree To Our Terms and Conditions</span>
                    </label>
                    {errors.terms && (
                        <p className="text-sm text-red-600">You must agree to the terms and conditions to use this site.</p>
                    )}
                    <p className="text-sm border p-2 my-2 bg-gray-300 rounded">
                        Tick this box to agree to the use of your data as laid out in the
                        <Link href={privacy()} className="underline text-[#336b87] hover:text-gray-700 mx-1" aria-label="privacy policy">privacy policy</Link>
                        and to the following terms and conditions:<br/>
                        1. This site is for personal use only.<br/>
                        2. Contacts added by you are happy to receive email notifications sent by you.<br/>
                        3. You will not use this site to share or send illegal or abusive content.
                    </p>

                    <div className="flex justify-end mt-4">
                        <SubmitBtn processing={processing}>Register</SubmitBtn>
                    </div>
                </>
            )}
        </Form>
    );
}