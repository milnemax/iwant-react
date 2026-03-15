import {Link, usePage} from '@inertiajs/react';
import { sharedList } from '@/routes';
import type { SharedList, SharedData } from '@/types';
import { Pointer } from 'lucide-react';
import { formatDate } from '@/lib/utils';

interface SharedListCardProps {
    list: SharedList,
}

export default function SharedListCard({ list }: SharedListCardProps) {
    const { auth } = usePage<SharedData>().props;

    const contact = (list: SharedList) => {
        return list.contacts.find(
            c => c.user_id === auth.user.id
        );
    };

    return (
        <div className="flex w-full my-2 border border-gray-500 rounded-lg shadow-lg p-4 cursor-pointer bg-white items-center">
            <Link href={sharedList({list: list.id, code: contact(list).pivot.code})} title={`View ${list.name}`} className="grow flex hover:bg-gray-100 items-center">
                <Pointer className="text-xl text-[#336b87] mr-4 ml-2"/>
                <div>
                    <p>{list.name}</p>
                    <p className="text-gray-500 text-sm">{list.owner} - {list.list_type.name} - {formatDate(list.due_date)}</p>
                </div>
            </Link>
        </div>
    );
}


