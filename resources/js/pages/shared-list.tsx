import {Head, usePage} from '@inertiajs/react';
import AppHeader from '@/components/app-header';
import AppFooter from '@/components/app-footer';
import SuccessMsg from '@/components/messages/success-msg';
import ErrorMsg from '@/components/messages/error-msg';
import SharedListItemCard from '@/components/cards/shared-list-item-card';
import { formatDate } from '@/lib/utils';
import {useState} from "react";
import type { SharedListItem, SharedList, Contact } from '@/types';
import SubmitOfferForm from "@/components/forms/public/submit-offer-form";

type PageProps = {
    list?: SharedList,
    contact?: Contact
    items?: SharedListItem[],
    code: string
}

export default function SharedList() {
    const { list, contact, items, code } = usePage<PageProps>().props;

    const [activeItem, setActiveItem] = useState<SharedListItem | null>(null);
    const [showOfferForm, setShowOfferForm] = useState(false);

    const openOfferForm = (item: SharedListItem) => {
        setActiveItem(item);
        setShowOfferForm(true);
    };

    const closeOfferForm = () => {
        setShowOfferForm(false);
        setActiveItem(null);
    };

    return (
        <>
            <Head title="Shared List">
                <meta name="description" content="iWantiWant allows you to create and share wish lists with your friends and family" />
            </Head>
            <div className="flex min-h-screen flex-col items-center pb-6 pt:16 bg-gray-100 text-gray-700 lg:justify-center">
                <AppHeader />
                <SuccessMsg />
                <ErrorMsg />

                <main className="flex flex-col w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0 my-[8rem] px-3">
                    {list ? (
                        <>
                            <h1 className="text-2xl mb-1 text-center">{list.name}</h1>
                            <p className="mb-4 text-center">{list.owner} - {list.list_type.name} - {formatDate(list.due_date)}</p>

                            <div className="w-full max-w-[335px] lg:max-w-4xl">
                                {items.map((item, index) => (
                                    <SharedListItemCard
                                        key={index}
                                        sharedListItem={item}
                                        contact={contact}
                                        code={code}
                                        listId={list.id}
                                        openOfferForm={(item) => openOfferForm(item)}
                                    />
                                ))}
                            </div>
                        </>
                    ) : (
                        <>
                            <h1 className="text-2xl mb-1 text-center">Code has expired</h1>
                            <p className="mb-4 text-center">This code has expired please contact your friend or family member for the new code.</p>
                        </>
                    )}

                    {showOfferForm && (
                        <SubmitOfferForm sharedListItem={activeItem} closeModelMethod={closeOfferForm} listId={list.id} code={code}/>
                    )}
                </main>

                <AppFooter />
            </div>
        </>
    );
}
