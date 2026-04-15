import {Head, router, usePage} from '@inertiajs/react';
import { shoppingListMarkBought } from '@/routes';

import type { ShoppingList } from '@/types';

import AppHeader from '@/components/app-header';
import AppFooter from '@/components/app-footer';
import ErrorMsg from '@/components/messages/error-msg';
import ShoppingListItemCard from '@/components/cards/shopping-list-item-card';
import SuccessMsg from '@/components/messages/success-msg';

type PageProps = {
    shoppingLists: ShoppingList[],
}

export default function ShoppingList() {
    const { shoppingLists } = usePage<PageProps>().props;

    const markAsBought = (itemId: number) => {
        router.post(shoppingListMarkBought({item: itemId}), {}, {
            preserveScroll: true,
        });
    };

    return (
        <>
            <Head title="Shopping List">
                <meta name="description" content="iWantiWant allows you to create and share wish lists with your friends and family" />
            </Head>
            <div className="flex min-h-screen flex-col items-center pb-6 pt:16 bg-gray-100 text-gray-700 lg:justify-center">
                <AppHeader />
                <SuccessMsg />
                <ErrorMsg />

                <main className="flex flex-col w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0 my-[8rem] px-3">
                    <h1 className="text-2xl mb-1 text-center">Your Shopping List</h1>
                    <p className="mb-4 text-center">Click on an item to mark it as bought.</p>

                    <div className="w-full max-w-[335px] lg:max-w-4xl">
                        {shoppingLists.map((shoppingList) => (
                            <div key={shoppingList.id}>
                                <h2 className="text-lg">{shoppingList.name}</h2>
                                <p className="text-gray-500 mb-1 border-b border-[#336b87]">{shoppingList.description}</p>

                                {shoppingList.items.map((shoppingListItem) => (
                                    <ShoppingListItemCard
                                        key={`item_${shoppingListItem.listItem.id}`}
                                        shoppingListItem={shoppingListItem}
                                        onFlagAsBoughtClick={(itemId) => markAsBought(itemId)}
                                    />
                                ))}
                            </div>
                        ))}
                    </div>
                </main>

                <AppFooter />
            </div>
        </>
    );
}