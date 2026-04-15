import { Form } from '@inertiajs/react';
import {useState} from "react";

import { closeAccount } from '@/routes';

import {Trash} from "lucide-react";

import Model from '@/components/model';

import { CancelBtn } from '@/components/forms/cancel-btn';
import { PrimaryBtn } from '@/components/forms/primary-btn';
import { SubmitBtn } from '@/components/forms/submit-btn';

export default function CloseAccountForm() {
    const [showModal, setShowModal] = useState<boolean>(false);

    return (
        <div className="w-full max-w-[335px] lg:max-w-4xl p-6 my-10 flex justify-end">
            {showModal && (
                <Model>
                    <h3 className="text-xl my-2">Close Your Account</h3>

                    <p className="mb-4">We are sorry to see you go, use the form below to close your account, deleting all of your personal information and optionally unsubscribe from the site.</p>
                    <ul className="mb-2 text-sm list-disc list-inside">
                        <li>By closing your account all personal information, contacts and lists will be deleted.</li>
                        <li>You can create a new account at any time however you will not be able to recover any information from a previous account.</li>
                        <li>With your account closed you will still get emails from other users to access their lists, if you tick unsubscribe below these emails will also be stopped.</li>
                        <li>To resubscribe you will need to create a new account.</li>
                    </ul>

                    <Form
                        action={closeAccount()}
                        method="delete"
                        className="w-full"
                    >
                        {({ errors, processing }) => (
                            <>
                                <label htmlFor="user_unsubscribe" className="w-full inline-flex items-center mt-4 cursor-pointer">
                                    <input id="user_unsubscribe" type="checkbox" className="form-checkbox h-4 w-4 text-[#336b87] focus:outline-none" name="user_unsubscribe" value="1" />
                                    <span className="ml-2 text-sm">Unsubscribe from all emails?</span>
                                </label>

                                <div className="flex justify-between mt-6">
                                    <CancelBtn buttonClick={() => setShowModal(false)}>Cancel</CancelBtn>
                                    <SubmitBtn processing={processing}>Close Account</SubmitBtn>
                                </div>
                            </>
                        )}
                    </Form>
                </Model>
            )}

            <PrimaryBtn buttonClick={() => {setShowModal(true)}} icon={Trash}>
                <span>Close Account</span>
            </PrimaryBtn>
        </div>
    );
}