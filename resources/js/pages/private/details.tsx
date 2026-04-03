import {Head, usePage, Link} from '@inertiajs/react';
import { closeAccount } from '@/routes';
import AppHeader from '@/components/app-header';
import AppFooter from '@/components/app-footer';
import SuccessMsg from '@/components/messages/success-msg';
import ErrorMsg from '@/components/messages/error-msg';
import ChangePasswordForm from '@/components/forms/auth/change-password-form';
import CloseAccountForm from '@/components/forms/private/close-account-form';
import ExportDetailsForm from '@/components/forms/private/export-details-form';
import PersonalDetailsForm from '@/components/forms/private/personal-details-form';
import PermissionForm from '@/components/forms/private/permissions-form';
import type { SharedData } from '@/types';
import {formatDate} from "@/lib/utils";

export default function Details() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Your Details">
                <meta name="description" content="iWantiWant allows you to create and share wish lists with your friends and family" />
            </Head>
            <div className="flex min-h-screen flex-col items-center pb-6 pt:16 bg-gray-100 text-gray-700 lg:justify-center">
                <AppHeader />
                <SuccessMsg />
                <ErrorMsg />

                <main className="flex flex-col w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0 my-[8rem] px-3">
                    <h1 className="text-2xl mb-1 text-center">Your Details</h1>
                    <p className="mb-1 text-center">You created an account on the { formatDate(auth.user.created_at) }, all your personal data can be found and managed here</p>
                    <p className="mb-4 text-center">If you wish to close your account <Link href={closeAccount} title='Close Account'>click here</Link>.</p>

                    <PersonalDetailsForm />
                    <ChangePasswordForm />
                    <PermissionForm />
                    <ExportDetailsForm />
                    <CloseAccountForm />
                </main>

                <AppFooter />
            </div>
        </>
    );
}