import {Form, usePage} from '@inertiajs/react';

import { permissionsUpdate } from '@/routes';

import { SubmitBtn } from '@/components/forms/submit-btn';

interface PermissionFormProps {
    notifications: bool,
    offerNotifications: bool
}

export default function PermissionsForm() {
    const page = usePage<PermissionFormProps>();
    const { notifications, offerNotifications } = page.props;

    return (
        <Form
            action={permissionsUpdate()}
            method="put"
            className="shadow-lg rounded-lg bg-white w-full max-w-[335px] lg:max-w-4xl p-6 my-10"
        >
            {({ errors, processing }) => (
                <>
                    <h3 className="text-xl my-2">Your Notification Permissions</h3>

                    <label htmlFor="user_publish_notifications" className="w-full inline-flex items-center mt-4 cursor-pointer">
                        <input id="user_publish_notifications" defaultChecked={notifications} type="checkbox" className="form-checkbox h-4 w-4 text-[#336b87] focus:outline-none" name="user_publish_notifications" value="1" />
                        <span className="ml-2 text-sm">Receive Notifications</span>
                    </label>
                    <p className="text-sm text-gray-400">Have you given permission for us to send you an email when a friend or family member publishes a list.</p>

                    <label htmlFor="user_offer_notifications" className="w-full inline-flex items-center mt-4 cursor-pointer">
                        <input id="user_offer_notifications" defaultChecked={offerNotifications} type="checkbox" className="form-checkbox h-4 w-4 text-[#336b87] focus:outline-none" name="user_offer_notifications" value="1" />
                        <span className="ml-2 text-sm">Receive Offer Notifications</span>
                    </label>
                    <p className="text-sm text-gray-400">Have you given permission for us to send you an email when a friend or family member accepts an offer you made.</p>

                    <div className="flex justify-end mt-4">
                        <SubmitBtn processing={processing}>Save Changes</SubmitBtn>
                    </div>
                </>
            )}
        </Form>
    );
}