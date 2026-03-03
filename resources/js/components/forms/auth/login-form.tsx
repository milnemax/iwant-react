import { Form, Link } from '@inertiajs/react';
import { privacy } from '../../../routes/index';
import { store } from '../../../routes/login/index';
import { request } from '../../../routes/password/index';
import { PrimaryBtn } from '../primary-btn';

export default function LoginForm() {
    return (
        <Form
            {...store.form()}
            resetOnSuccess={['password']}
            className="shadow-lg rounded-lg bg-white w-full max-w-[335px] lg:max-w-4xl p-6 my-20"
        >
            {({ errors, processing }) => (
                <>
                    <label className="block" htmlFor="login_email">Email</label>
                    <input className="w-full border mt-1 text-gray-500 p-1 focus:outline-none" type="email" id="email" name="email" required autoFocus />
                    {errors.email && (
                        <p className="text-sm text-red-600">your details do not match our records please check and try again</p>
                    )}

                    <label className="block mt-3" htmlFor="password">Password</label>
                    <input className="w-full border mt-1 text-gray-500 p-1 focus:outline-none" type="password" id="password" name="password" required autoComplete="current-password" />

                    <label htmlFor="remember" className="inline-flex items-center mt-2">
                        <input id="remember" type="checkbox" className="form-checkbox h-4 w-4 text-[#336b87] focus:outline-none" name="remember" />
                        <span className="ml-2 text-sm">Remember me</span>
                    </label>

                    <p className="text-sm border p-2 my-2 bg-gray-300 rounded">
                        A cookie is stored on your machine as part of the authentication, by logging in you are accepting the cookie and the terms described in our
                        <Link href={privacy()} className="underline text-[#336b87] hover:text-gray-700 ml-1" aria-label="privacy policy">privacy policy</Link>
                    </p>

                    <div className="flex justify-between mt-4">
                        <Link href={request()} className="underline text-[#336b87] hover:text-gray-700" aria-label="Forgotten your password?">Forgotten your password?</Link>

                        <PrimaryBtn processing={processing}>Login</PrimaryBtn>
                    </div>
                </>
            )}
        </Form>
    );
}