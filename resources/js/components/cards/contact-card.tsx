import type { Contact } from '@/types';

import { Trash2 } from 'lucide-react';

interface ContactCardProps {
    contact: Contact,
    onDeleteClick: (contact: Contact) => void
}

export default function ContactCard({ contact, onDeleteClick }: ContactCardProps) {
    return (
        <div
            aria-label={`Delete ${contact.name}`}
            className="flex w-full my-2 border border-gray-500 rounded-lg shadow-lg p-4 cursor-pointer bg-white hover:bg-gray-100 items-center"
            onClick={() => onDeleteClick(contact)}
        >
            <div className="flex-grow">
                <p>{contact.name}</p>
                <p className="text-gray-500 text-sm">{contact.unsubscribed
                    ? (<span className="text-red-500 text-xs mr-1">(unsubscribed)</span>)
                    : (contact.email)
                }</p>
            </div>
            <Trash2 className="text-xl text-red-500 mr-2 ml-4"/>
        </div>
    );
}


