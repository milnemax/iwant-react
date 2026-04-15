import {Head, router, usePage} from '@inertiajs/react';
import {useState} from "react";

import type { PaginatedLists, List } from '@/types';

import AddListForm from '@/components/forms/private/add-list-form';
import AppHeader from '@/components/app-header';
import AppFooter from '@/components/app-footer';
import ErrorMsg from '@/components/messages/error-msg';
import ListCard from '@/components/cards/list-card';
import Model from '@/components/model';
import Pagination from '@/components/pagination';
import SuccessMsg from '@/components/messages/success-msg';

import {CancelBtn} from '@/components/forms/cancel-btn';
import {PrimaryBtn} from '@/components/forms/primary-btn';

type PageProps = {
    lists: PaginatedLists,
}

export default function Lists() {
    const { lists } = usePage<PageProps>().props;
    const [deleteList, setDeleteList] = useState<List | null>(null)

    return (
        <>
            <Head title="Lists">
                <meta name="description" content="iWantiWant allows you to create and share wish lists with your friends and family" />
            </Head>
            <div className="flex min-h-screen flex-col items-center pb-6 pt:16 bg-gray-100 text-gray-700 lg:justify-center">
                <AppHeader />
                <SuccessMsg />
                <ErrorMsg />

                <main className="flex flex-col w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0 my-[8rem] px-3">
                    <h1 className="text-2xl mb-1 text-center">Your Lists</h1>
                    <p className="mb-4 text-center">All of your lists are shown below click to manage an individual list, or use the form below to add a new one</p>

                    <div className="w-full max-w-[335px] lg:max-w-4xl">
                        {lists.data.map((list, index) => (
                            <ListCard
                                key={index}
                                list={list}
                                onDeleteClick={setDeleteList}
                            />
                        ))}

                        <Pagination links={lists.links} />
                    </div>

                    {deleteList !== null && (
                        <Model>
                            <p>Are you sure you want to delete this list?</p>
                            <div className="flex justify-between mt-6">
                                <CancelBtn buttonClick={() => setDeleteList(null)}>Cancel</CancelBtn>
                                <PrimaryBtn buttonClick={() => { setDeleteList(null); router.delete(`/lists/${deleteList.id}`);} }>Delete List</PrimaryBtn>
                            </div>
                        </Model>
                    )}

                    <AddListForm />
                </main>

                <AppFooter />
            </div>
        </>
    );
}