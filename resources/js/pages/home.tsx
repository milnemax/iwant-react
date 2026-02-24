import { Head } from '@inertiajs/react';
import AppHeader from '@/components/app-header';
import AppFooter from '@/components/app-footer';

import homeBanner from '@/assets/home_banner.png';

export default function Home() {
    return (
        <>
            <Head>
                <meta name="description" content="iWantiWant allows you to create and share wish lists with your friends and family" />
            </Head>
            <div className="flex min-h-screen flex-col items-center pb-6 pt:16 bg-gray-100 text-gray-700 lg:justify-center">
                <AppHeader />

                <main className="flex w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0 my-[8rem]">
                    <div className="flex w-full max-w-[335px] flex-col-reverse lg:max-w-4xl lg:flex-row shadow-lg rounded-lg overflow-hidden">
                        <div className="flex-1 bg-white p-6">
                            <h1 className="mb-2 text-xl font-bold">Shared Gift Lists</h1>
                            <p class="mb-2">Tired of asking your family what they want for their birthday, only to hear “Nothing,” or ending up buying the same present as someone else?</p>
                            <p class="mb-2">Do you struggle to remember gift ideas you’ve spotted weeks in advance, only to forget them when the time comes?</p>
                            <p class="mb-2">Our service allows you to create personalised gift lists and share them securely with your family and friends. Recipients receive an email with access to the list, where they can mark the items they plan to buy or contribute towards collaboratively.</p>
                            <p class="mb-2">All contributions and intentions remain completely private, giving you a stress-free way to organise gifts while avoiding duplicates.</p>
                        </div>
                        <img className="min-h-[335px] lg:w-1/2 object-cover" src={homeBanner} alt="My christmas wish list" />
                    </div>
                </main>

                <AppFooter />
            </div>
        </>
    );
}
