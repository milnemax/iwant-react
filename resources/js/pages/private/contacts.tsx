import {Head, usePage} from '@inertiajs/react';
import { router } from "@inertiajs/react"
import {useState} from "react";
import AppHeader from '@/components/app-header';
import AppFooter from '@/components/app-footer';
import ContactCard from '@/components/cards/contact-card';
import Model from '@/components/model';
import SuccessMsg from '@/components/messages/success-msg';
import ErrorMsg from '@/components/messages/error-msg';
import Pagination from '@/components/pagination';
import AddContactForm from '@/components/forms/private/add-contact-form';
import {CancelBtn} from '@/components/forms/cancel-btn';
import {PrimaryBtn} from '@/components/forms/primary-btn';
import type { PaginatedContacts, Contact } from '@/types';

type PageProps = {
    contacts: PaginatedContacts
}

export default function Contacts() {
    const { contacts } = usePage<PageProps>().props;
    const [deleteContact, setDeleteContact] = useState<Contact | null>(null)

    return (
        <>
            <Head title="Contacts">
                <meta name="description" content="iWantiWant allows you to create and share wish lists with your friends and family" />
            </Head>
            <div className="flex min-h-screen flex-col items-center pb-6 pt:16 bg-gray-100 text-gray-700 lg:justify-center">
                <AppHeader />
                <SuccessMsg />
                <ErrorMsg />

                <main className="flex flex-col w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0 my-[8rem] px-3">
                    <h1 className="text-2xl mb-1 text-center">Your Contacts</h1>
                    <p className="mb-1 text-center">Add your friends and family so you can send them your lists, after the initial email your friends and family must consent to receive further emails.</p>
                    <p className="mb-4 text-center">Click to delete a contact, use the "Add new contact" form below to add a new one.</p>

                    <div className="w-full max-w-[335px] lg:max-w-4xl">
                        {contacts.data.map((contact, index) => (
                            <ContactCard
                                key={index}
                                contact={contact}
                                onDeleteClick={setDeleteContact}
                            />
                        ))}

                        <Pagination links={contacts.links} />
                    </div>

                    {deleteContact !== null && (
                        <Model>
                            <p>Are you sure you want to delete this contact?</p>
                            <div className="flex justify-between mt-6">
                                <CancelBtn buttonClick={() => setDeleteContact(null)}>Cancel</CancelBtn>
                                <PrimaryBtn buttonClick={() => { setDeleteContact(null); router.delete(`/contacts/${deleteContact.id}`);} }>Delete Contact</PrimaryBtn>
                            </div>
                        </Model>
                    )}

                    <AddContactForm />
                </main>

                <AppFooter />
            </div>
        </>
    );
}