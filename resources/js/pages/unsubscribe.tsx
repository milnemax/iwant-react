import { Head } from '@inertiajs/react';
import AppHeader from '@/components/app-header';
import AppFooter from '@/components/app-footer';
import SuccessMsg from '@/components/messages/success-msg';
import ErrorMsg from '@/components/messages/error-msg';
import UnsubscribeForm from '@/components/forms/unsubscribe-form';

export default function Unsubscribe() {
    return (
        <>
            <Head title="Unsubscribe">
                <meta name="description" content="iWantiWant allows you to create and share wish lists with your friends and family" />
            </Head>
            <div className="flex min-h-screen flex-col items-center pb-6 pt:16 bg-gray-100 text-gray-700 lg:justify-center">
                <AppHeader />
                <SuccessMsg />
                <ErrorMsg />

                <main className="flex flex-col w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0 my-[8rem]">
                    <div className="w-full max-w-[335px] lg:max-w-4xl lg:flex-row shadow-lg rounded-lg overflow-hidden p-6">
                        <h1 className="text-3xl mb-4">Unsubscribe</h1>

                        <p className="mb-1">Enter your email address below to unsubscribe:</p>
                        <p className="mb-1">If you have an account then all email permissions your have previously provided will be revoked. <span className='text-[#336b87]'>This can be undone in the Your Details page once you have logged in.</span></p>
                        <p className="mb-2">If you are a recipient added be another user, your email details will be removed and they will be informed you are no longer emailable. <span className='text-[#336b87]'>This can only be undone by creating a new account.</span></p>
                    </div>

                    <UnsubscribeForm />
                </main>

                <AppFooter />
            </div>
        </>
    );
}