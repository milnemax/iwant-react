import {Form, usePage} from '@inertiajs/react';
import { listsStore } from '@/routes';
import type { ListType } from '@/types';
import { SubmitBtn } from '@/components/forms/submit-btn';
import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface AddListProps {
    listTypes: ListType[],
    christmas: string,
    birthday: string,
    christmasTypeId: number,
    birthdayTypeId: number,
}

export default function AddListForm() {
    const page = usePage<AddListProps>();
    const { listTypes, christmas, birthday, christmasTypeId, birthdayTypeId } = page.props;

    const [selectedType, setSelectedType] = useState<number>(0);
    const [dueDate, setDueDate] = useState<Date | null>(null);

    // Populate due date automatically for Birthday or Christmas
    useEffect(() => {
        if (birthday && selectedType === birthdayTypeId) {
            setDueDate(new Date(birthday));
        } else if (christmas && selectedType === christmasTypeId) {
            setDueDate(new Date(christmas));
        } else {
            setDueDate(null);
        }
    }, [selectedType, page.props]);

    return (
        <Form
            action={listsStore()}
            resetOnSuccess
            method="post"
            className="shadow-lg rounded-lg bg-white w-full max-w-[335px] lg:max-w-4xl p-6 my-20"
        >
            {({ errors, processing }) => (
                <>
                    <h3 className="text-xl my-2">Add A New List</h3>

                    <label className="block" htmlFor="list_name">List Name</label>
                    <input type="text" name="list_name" className="w-full border mt-1 text-gray-500 p-1 focus:outline-none" required autoFocus />
                    {errors.list_name && ( <p className="text-sm text-red-600">You must provide a unique name for your list.</p>)}

                    <div className="grid md:grid-cols-2 gap-2 mt-2 mb-4">
                        <div>
                            <label className="block" htmlFor="list_type">Type</label>
                            <select
                                name="list_type"
                                className="w-full border mt-1 text-gray-500 p-1 focus:outline-none"
                                value={selectedType}
                                onChange={(e) => setSelectedType(Number(e.target.value))}
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
                        <SubmitBtn processing={processing}>Add List</SubmitBtn>
                    </div>
                </>
            )}
        </Form>
    );
}