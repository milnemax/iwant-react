import { Head } from '@inertiajs/react';
import AppHeader from '@/components/app-header';
import AppFooter from '@/components/app-footer';

export default function SharedList() {
    return (
        <>
            <Head>
                <meta name="description" content="iWantiWant allows you to create and share wish lists with your friends and family" />
            </Head>
            <div className="flex min-h-screen flex-col items-center pb-6 pt:16 bg-gray-100 text-gray-700 lg:justify-center">
                <AppHeader />

                <main className="flex flex-col w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0 my-[8rem]">
                    <div className="flex w-full max-w-[335px] flex-col-reverse lg:max-w-4xl lg:flex-row shadow-lg rounded-lg overflow-hidden">
                        <h1 className="mb-2 text-xl font-bold">Bob</h1>
                    </div>
                </main>

                <AppFooter />
            </div>
        </>
    );
}
