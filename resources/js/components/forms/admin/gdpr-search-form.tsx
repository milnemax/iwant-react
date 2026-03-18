import {Form, usePage} from '@inertiajs/react';
import { SubmitBtn } from '../submit-btn';
import { adminGdpr } from '@/routes';

export default function GdprSearchForm() {
    const { props } = usePage();

    return (
        <Form
            {...adminGdpr.form()}
            className="shadow-lg rounded-lg bg-white w-full max-w-[335px] lg:max-w-4xl p-6 my-20"
        >
            {({ processing }) => (
                <div className="flex justify-between">
                    <input className="w-full border text-gray-500 p-1 focus:outline-none" type="search" id="search" name="search" defaultValue={props.search} />

                    <SubmitBtn processing={processing} className="rounded-l-none">Search</SubmitBtn>
                </div>
            )}
        </Form>
    );
}