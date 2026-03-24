import {Head, usePage} from '@inertiajs/react';
import AppHeader from '@/components/app-header';
import AppFooter from '@/components/app-footer';
import SuccessMsg from '@/components/messages/success-msg';
import ErrorMsg from '@/components/messages/error-msg';
import EditListItemForm from '@/components/forms/private/edit-list-item-form';
import type { ListItem, List } from '@/types';

type PageProps = {
    listItem: ListItem,
}

export default function ListItem() {
    const { listItem } = usePage<PageProps>().props;

    return (
        <>
            <Head title={listItem.name}>
                <meta name="description" content="iWantiWant allows you to create and share wish lists with your friends and family" />
            </Head>
            <div className="flex min-h-screen flex-col items-center pb-6 pt:16 bg-gray-100 text-gray-700 lg:justify-center">
                <AppHeader />
                <SuccessMsg />
                <ErrorMsg />

                <main className="flex flex-col w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0 my-[8rem] px-3">
                    <h1 className="text-2xl mb-1 text-center">Edit List Item</h1>

                    <EditListItemForm />
                </main>

                <AppFooter />
            </div>
        </>
    );
}