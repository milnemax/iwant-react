import {Form, usePage} from '@inertiajs/react';
import { useState, useEffect } from 'react';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { listUpdate } from '@/routes';

import type { ListType, List } from '@/types';

import { SubmitBtn } from '@/components/forms/submit-btn';

interface EditListProps {
    list: List
    listTypes: ListType[],
    christmas: string,
    birthday: string,
    christmasTypeId: number,
    birthdayTypeId: number,
}

export default function EditListForm() {
    const page = usePage<EditListProps>();
    const { list, listTypes, christmas, birthday, christmasTypeId, birthdayTypeId } = page.props;

    const [selectedType, setSelectedType] = useState<number>(list.list_type.id);
    const [dueDate, setDueDate] = useState<Date | null>(new Date(list.due_date));

    return (
        <details className="shadow-lg rounded-lg bg-white w-full max-w-[335px] lg:max-w-4xl mt-20 mb-6">
            <summary className="cursor-pointer px-6 py-4 text-2xl text-[#336b87]">
                Edit {list.name}
            </summary>

            <Form
                action={listUpdate({list: list.id})}
                method="post"
                className="p-6"
            >
                {({ errors, processing }) => (
                    <>
                        <label className="block" htmlFor="list_name">List Name</label>
                        <input type="text" name="list_name" defaultValue={list.name} className="w-full border mt-1 text-gray-500 p-1 focus:outline-none" required autoFocus />
                        {errors.list_name && ( <p className="text-sm text-red-600">You must provide a unique name for your list.</p>)}

                        <div className="grid md:grid-cols-2 gap-2 mt-2 mb-4">
                            <div>
                                <label className="block" htmlFor="list_type">Type</label>
                                <select
                                    name="list_type"
                                    className="w-full border mt-1 text-gray-500 p-1 focus:outline-none"
                                    value={selectedType}
                                    onChange={(e) => {
                                        const value = Number(e.target.value);
                                        setSelectedType(value);

                                        if (birthday && value === birthdayTypeId) {
                                            setDueDate(new Date(birthday));
                                        } else if (christmas && value === christmasTypeId) {
                                            setDueDate(new Date(christmas));
                                        }
                                    }}
                                >
                                    <option value="0">Please Select...</option>
                                    {listTypes.map((item, index) => (
                                        <option
                                            key={index}
                                            value={item.id}
                                        >{item.name}</option>
                                    ))}
                                </select>
                                {errors.list_type && ( <p className="text-sm text-red-600">Please select a list type.</p>)}
                            </div>
                            <div>
                                <label className="block" htmlFor="due_date">Due Date</label>
                                <DatePicker
                                    selected={dueDate}
                                    onChange={(date: Date) => setDueDate(date)}
                                    dateFormat="yyyy/MM/dd"
                                    className="w-full border mt-1 text-gray-500 p-1 focus:outline-none"
                                    wrapperClassName="w-full"
                                    placeholderText="Select a date"
                                    name="due_date"
                                />
                                {errors.due_date && ( <p className="text-sm text-red-600">Please set a due date.</p>)}
                            </div>
                        </div>

                        <div className="flex justify-end mt-4">
                            <SubmitBtn processing={processing}>Save Changes</SubmitBtn>
                        </div>
                    </>
                )}
            </Form>
        </details>
    );
}