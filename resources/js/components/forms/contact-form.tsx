import { Form } from '@inertiajs/react';
import { contactUsForm } from '@/routes';
import { PrimaryBtn } from '@/components/forms/primary-btn';

export default function ContactForm() {
    return (
        <Form
            action={contactUsForm()}
            resetOnSuccess
            method="post"
            className="shadow-lg rounded-lg bg-white w-full max-w-[335px] lg:max-w-4xl p-6 my-20"
        >
            {({ errors, processing }) => (
                <>
                    <h3 className="text-xl my-2">Contact the controller to object or question any aspect of this policy. <a name="contact_controller"></a></h3>

                    <label className="block" htmlFor="message">Message <span className="text-sm text-gray-500">( if you require a response please provide an email address in your message. )</span></label>
                    <textarea className="border mt-1 text-gray-500 p-1 w-full focus:outline-none" id="message" name="message" rows={5} autoFocus></textarea>

                    {errors.message && (
                        <p className="text-sm text-red-600">
                            {errors.message}
                        </p>
                    )}

                    <div className="flex justify-end mt-4">
                        <PrimaryBtn processing={processing}>Contact Controller</PrimaryBtn>
                    </div>
                </>
            )}
        </Form>
    );
}