import {Form, usePage} from '@inertiajs/react';

import { detailsUpdate } from '@/routes';

import type { SharedData } from '@/types';

import {mapMonth} from "@/lib/utils";

import { SubmitBtn } from '@/components/forms/submit-btn';

export default function PersonalDetailsForm() {
    const { auth } = usePage<SharedData>().props;

    return (
        <Form
            action={detailsUpdate()}
            method="put"
            className="shadow-lg rounded-lg bg-white w-full max-w-[335px] lg:max-w-4xl p-6 my-10"
        >
            {({ errors, processing }) => (
                <>
                    <h3 className="text-xl my-2">Edit Your Details</h3>

                    <label className="block" htmlFor="user_name">Name</label>
                    <p className="text-xs text-gray-400">Your name is included in the emails we send to your friends and family, this is required to provide our service.</p>
                    <input type="text" name="user_name" className="w-full border mt-1 text-gray-500 p-1 focus:outline-none" defaultValue={auth.user.name} required autoFocus />
                    {errors.user_name && ( <p className="text-sm text-red-600">you must provide a name.</p>)}

                    <label className="block mt-4" htmlFor="user_email">Email</label>
                    <p className="text-xs text-gray-400">Your email address is used as your login username, this is required to provide our service.</p>
                    <input type="email" name="user_email" className="w-full border mt-1 text-gray-500 p-1 focus:outline-none" defaultValue={auth.user.email} />
                    {errors.user_email && ( <p className="text-sm text-red-600">you must provide a unique and valid email address</p>)}

                    <label className="block mt-4" htmlFor="user_birth_day">Birthday</label>
                    <p className="text-xs text-gray-400">You can optionally provide the day and month of your Birthday this will allow us to automatically close your birthday lists.</p>
                    <div className="flex gap-4 mb-4 mt-1">
                        <select className="w-full border mt-1 text-gray-500 p-1 focus:outline-none" name="user_birth_day" defaultValue={auth.user.birth_day}>
                            <option value="0">Day...</option>
                            {[...Array(31)].map((_, i) => {
                                const day = i + 1;
                                return (
                                    <option key={day} value={day}>{day}</option>
                                );
                            })}
                        </select>

                        <select className="w-full border mt-1 text-gray-500 p-1 focus:outline-none" name="user_birth_month" defaultValue={auth.user.birth_month}>
                            <option value="0">Month...</option>
                            {[...Array(12)].map((_, i) => {
                                const month = i + 1;
                                return (
                                    <option key={month} value={month}>{mapMonth(month)}</option>
                                );
                            })}
                        </select>
                    </div>

                    <div className="flex justify-end mt-4">
                        <SubmitBtn processing={processing}>Save Changes</SubmitBtn>
                    </div>
                </>
            )}
        </Form>
    );
}