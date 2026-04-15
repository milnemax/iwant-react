import { Head } from '@inertiajs/react';

import AppHeader from '@/components/app-header';
import AppFooter from '@/components/app-footer';
import ResetPasswordForm from '@/components/forms/auth/reset-password-form';

type Props = {
    token: string;
    email: string;
};

export default function ResetPassword({ token, email }: Props) {
    return (
        <>
            <Head title="Reset Password">
                <meta name="description" content="iWantiWant allows you to create and share wish lists with your friends and family" />
            </Head>

            <div className="flex min-h-screen flex-col items-center pb-6 pt:16 bg-gray-100 text-gray-700 lg:justify-center">
                <AppHeader />

                <main className="flex flex-col w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0 my-[8rem]">
                    <ResetPasswordForm token={token} email={email} />
                </main>

                <AppFooter />
            </div>
        </>
    );
}
