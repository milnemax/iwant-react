import { Head, Link } from '@inertiajs/react';
import { recipients, unsubscribe } from '@/routes';
import AppHeader from '@/components/app-header';
import AppFooter from '@/components/app-footer';

export default function Privacy() {
    return (
        <>
            <Head title="Privacy Policy">
                <meta name="description" content="iWantiWant allows you to create and share wish lists with your friends and family" />
            </Head>
            <div className="flex min-h-screen flex-col items-center pb-6 pt:16 bg-gray-100 text-gray-700 lg:justify-center">
                <AppHeader />

                <main className="flex w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0 my-[8rem]">
                    <div className="w-full max-w-[335px] lg:max-w-4xl shadow-lg rounded-lg overflow-hidden p-6">
                        <h1 className="text-3xl mb-4">Privacy Policy</h1>

                        <p className="mb-1">Max Milne is the controller for the personal information collected and processed by this site.</p>
                        <p className="mb-2">You can contact him using the form <a href="#contact_controller" className="underline text-[#336b87] hover:text-gray-700">below</a>.</p>

                        <p className="mb-2">
                            iWantiWant allows you as a user to create a list of things you want, you can then add
                            contact details of any number of recipients who
                            will be emailed a link to your list. The recipients can claim items on the list or suggest
                            to other recipients that combine resources to purchase a particular item,
                            you will not be able to see who has claimed what item.
                        </p>
                        <p className="mb-1">In order to provide this service we ask for your consent to hold information allowing you to login and to personalise emails sent to your recipients.</p>
                        <p className="mb-4">A recipient must provide consent after the initial email before further links can be sent, likewise they may choose to unsubscribe.</p>

                        <h3 className="text-xl my-2">Your Rights</h3>
                        <b className="mt-2">Right To Access</b>
                        <p className="mb-1 pl-3">All personal data for <b>Users</b> is available to view on the User Detail page once you have logged in.</p>
                        <p className="mb-1 pl-3">You can check if your email is stored as a <b>Recipient</b> on <Link href={recipients()} className="underline text-[#336b87] hover:text-gray-700" aria-label="Recipients page">this page</Link>.</p>
                        <b className="mt-2">Right To Rectification</b>
                        <p className="mb-1 pl-3">All personal data for <b>Users</b> can be rectified on the User Detail page once you have logged in.</p>
                        <p className="mb-1 pl-3">If your email is stored as a <b>Recipient</b> you can have your details removed <Link href={recipients()} className="underline text-[#336b87] hover:text-gray-700" aria-label="Recipients page">here</Link>.</p>
                        <b className="mt-2">Right To Erasure</b>
                        <p className="mb-1 pl-3"><b>Users</b> can close there account deleting all personal data on the User Detail page once logged in.</p>
                        <p className="mb-1 pl-3"><b>Recipients</b> can unsubscribe <Link href={unsubscribe()} className="underline text-[#336b87] hover:text-gray-700" aria-label="Unsubscribe page">here</Link>.</p>
                        <b className="mt-2">Right To Restrict Processing</b>
                        <p className="mb-1 pl-3"><b>Users</b> can restrict processing certain information by removing it on the User Detail page or deleting their account.</p>
                        <p className="mb-1 pl-3"><b>Recipients</b> can restrict processing by un-subscribing <Link href={unsubscribe()} className="underline text-[#336b87] hover:text-gray-700" aria-label="Unsubscribe page">here</Link>.</p>
                        <b className="mt-2">Right To Data Portability</b>
                        <p className="mb-1 pl-3"><b>Users</b> can export their data as XML from the User Details page.</p>
                        <b className="mt-2">Right To Object</b>
                        <p className="mb-4 pl-3">You can object to the way any of your data is processed in the form <a href="#contact_controller" className="underline text-[#336b87] hover:text-gray-700">below</a>, by deleting your account or you can unsubscribe <Link href={unsubscribe()} className="underline text-[#336b87] hover:text-gray-700" aria-label="Unsubscribe page">here</Link>.</p>

                        <h3 className="text-xl my-2">Personal Data</h3>
                        <b className="mt-2">Security</b>
                        <p className="mb-1">IP Address and Username are captured when a failed log in attempt is recognised these are stored for a minimum period to detect and mitigate hacking attempts.</p>
                        <b className="mt-2">User Data</b>
                        <p className="mb-1">Email - a user will provide an email which is used to identify them when then log in to the site and to identify when another user adds you as a recipient.</p>
                        <p className="mb-1">Password - an encrypted hash of a users password is stored to secure access to their details.</p>
                        <p className="mb-1">Name - a user will provide a name used to personalise the site once they log in and included in the recipients email to identify the email is from the user.</p>
                        <p className="mb-1">Birth Day & Month - a user can provide there birth day and month which will automatically populate the due date on their birthday lists.</p>
                        <p className="mb-1">This data is stored until the user changes it on the Your Details page or they close their account.</p>
                        <b className="mt-2">Recipient Data</b>
                        <p className="mb-1">Email - A user will assign an email to a recipient which will be used to inform the recipient that a list has been published and how to access it.</p>
                        <p className="mb-4">This data will be stored until the recipient unsubscribes or the user deletes it.</p>

                        <h3 className="text-xl my-2">Cookies</h3>
                        <b>Security</b>
                        <a name="cookie"></a>
                        <p>A cookie is stored on your device when you login as part of the authentication, the cookie is  not used to store or track any other information.</p>

                        <br/>

                        <h3 className="text-xl my-2">Contact the controller to object or question any aspect of this policy. <a name="contact_controller"></a></h3>
                    </div>
                </main>

                <AppFooter />
            </div>
        </>
    );
}
