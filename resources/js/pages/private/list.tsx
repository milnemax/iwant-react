import {Head, usePage, router} from '@inertiajs/react';
import {useState} from "react";

import type { PaginatedListItems, ListItem, List } from '@/types';

import AddListItemForm from '@/components/forms/private/add-list-item-form';
import AppHeader from '@/components/app-header';
import AppFooter from '@/components/app-footer';
import EditListForm from '@/components/forms/private/edit-list-form';
import ErrorMsg from '@/components/messages/error-msg';
import ListItemCard from '@/components/cards/list-item-card';
import Model from '@/components/model';
import Pagination from '@/components/pagination';
import ShareListForm from '@/components/forms/private/share-list-form';
import SuccessMsg from '@/components/messages/success-msg';

import {CancelBtn} from '@/components/forms/cancel-btn';
import {PrimaryBtn} from '@/components/forms/primary-btn';

type PageProps = {
    list: List,
    items: PaginatedListItems,
}

export default function List() {
    const { list, items } = usePage<PageProps>().props;
    const [deleteListItem, setDeleteListItem] = useState<ListItem | null>(null)

    return (
        <>
            <Head title={list.name}>
                <meta name="description" content="iWantiWant allows you to create and share wish lists with your friends and family" />
            </Head>
            <div className="flex min-h-screen flex-col items-center pb-6 pt:16 bg-gray-100 text-gray-700 lg:justify-center">
                <AppHeader />
                <SuccessMsg />
                <ErrorMsg />

                <main className="flex flex-col w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0 my-[8rem] px-3">
                    <EditListForm />
                    <ShareListForm />

                    <h1 className="text-2xl mb-1 text-center">List Items</h1>
                    <p className="mb-4 text-center">All of your list items are shown below click to manage an individual item, or use the form below to add a new one.</p>

                    <div className="w-full max-w-[335px] lg:max-w-4xl">
                        {items.data.map((item, index) => (
                            <ListItemCard
                                key={index}
                                listItem={item}
                                onDeleteClick={setDeleteListItem}
                            />
                        ))}

                        <Pagination links={items.links} />
                    </div>

                    {deleteListItem !== null && (
                        <Model>
                            <p>Are you sure you want to delete this list item?</p>
                            <div className="flex justify-between mt-6">
                                <CancelBtn buttonClick={() => setDeleteListItem(null)}>Cancel</CancelBtn>
                                <PrimaryBtn buttonClick={() => { setDeleteListItem(null); router.delete(`/lists/${list.id}/items/${deleteListItem.id}`);} }>Delete List Item</PrimaryBtn>
                            </div>
                        </Model>
                    )}

                    <AddListItemForm />
                </main>

                <AppFooter />
            </div>
        </>
    );
}