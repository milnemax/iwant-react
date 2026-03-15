import {Head, usePage} from '@inertiajs/react';
import AppHeader from '@/components/app-header';
import AppFooter from '@/components/app-footer';
import SharedListCard from '@/components/cards/shared-list-card';
import SuccessMsg from '@/components/messages/success-msg';
import ErrorMsg from '@/components/messages/error-msg';
import Pagination from '@/components/pagination';
import type { PaginatedSharedLists, SharedList } from '@/types';

type PageProps = {
    lists: PaginatedSharedLists,
}

export default function Lists() {
    const { lists } = usePage<PageProps>().props;

    return (
        <>
            <Head title="Shared Lists">
                <meta name="description" content="iWantiWant allows you to create and share wish lists with your friends and family" />
            </Head>
            <div className="flex min-h-screen flex-col items-center pb-6 pt:16 bg-gray-100 text-gray-700 lg:justify-center">
                <AppHeader />
                <SuccessMsg />
                <ErrorMsg />

                <main className="flex flex-col w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0 my-[8rem] px-3">
                    <h1 className="text-2xl mb-1 text-center">Lists Shared With You</h1>
                    <p className="mb-4 text-center">All of the lists that have been shared with you are listed below, click to view the list.</p>

                    <div className="w-full max-w-[335px] lg:max-w-4xl">
                        {lists.data.map((list, index) => (
                            <SharedListCard
                                key={index}
                                list={list}
                            />
                        ))}

                        <Pagination links={lists.links} />
                    </div>
                </main>

                <AppFooter />
            </div>
        </>
    );
}