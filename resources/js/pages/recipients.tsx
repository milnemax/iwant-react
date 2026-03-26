import { Head } from '@inertiajs/react';
import AppHeader from '@/components/app-header';
import AppFooter from '@/components/app-footer';
import SuccessMsg from '@/components/messages/success-msg';
import ErrorMsg from '@/components/messages/error-msg';
import DataRequestForm from '@/components/forms/data-request-form';

export default function Recipients() {
    return (
        <>
            <Head title="Recipients">
                <meta name="description" content="iWantiWant allows you to create and share wish lists with your friends and family" />
            </Head>
            <div className="flex min-h-screen flex-col items-center pb-6 pt:16 bg-gray-100 text-gray-700 lg:justify-center">
                <AppHeader />
                <SuccessMsg />
                <ErrorMsg />

                <main className="flex flex-col w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0 my-[8rem]">
                    <div className="w-full max-w-[335px] lg:max-w-4xl lg:flex-row shadow-lg rounded-lg overflow-hidden p-6">
                        <h1 className="text-3xl mb-4">Check if we have your personal details.</h1>

                        <p className="mb-1">Enter your email address below and we will send you any personal information we have and provide links to remove it:</p>
                        <p className="mb-2">The data is sent to the your email address for security, the email address provided is not saved during this process.</p>
                    </div>

                    <DataRequestForm />
                </main>

                <AppFooter />
            </div>
        </>
    );
}