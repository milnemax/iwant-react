import { exportDetails } from '@/routes';
import { SubmitBtn } from '@/components/forms/submit-btn';

/*
 * Uses a standard form so that the StreamedResponse is output as a download
 */
export default function ExportDetailsForm() {
    const route = exportDetails();

    const csrfToken = document
        .querySelector('meta[name="csrf-token"]')
        ?.getAttribute('content');

    return (
        <form
            action={route.url}
            method="post"
            className="shadow-lg rounded-lg bg-white w-full max-w-[335px] lg:max-w-4xl p-6 my-10"
        >
            <input type="hidden" name="_token" value={csrfToken} />

            <h3 className="text-xl my-2">Export Your Personal Details</h3>

            <label htmlFor="user_export_xml" className="w-full inline-flex items-center mt-4 cursor-pointer">
                <input id="user_export_xml" type="radio" className="form-radio h-4 w-4 text-[#336b87] focus:outline-none" name="user_export" value="xml" />
                <span className="ml-2 text-sm">Export as a XML file</span>
            </label>

            <label htmlFor="user_export_csv" className="w-full inline-flex items-center mt-4 cursor-pointer">
                <input id="user_export_csv" type="radio" className="form-radio h-4 w-4 text-[#336b87] focus:outline-none" name="user_export" value="csv" />
                <span className="ml-2 text-sm">Export as a comma separated file</span>
            </label>

            <label htmlFor="user_export_tsv" className="w-full inline-flex items-center mt-4 cursor-pointer">
                <input id="user_export_tsv" type="radio" className="form-radio h-4 w-4 text-[#336b87] focus:outline-none" name="user_export" value="tsv" />
                <span className="ml-2 text-sm">Export as a tab separated file</span>
            </label>

            <div className="flex justify-end mt-4">
                <SubmitBtn>Export Details</SubmitBtn>
            </div>
        </form>
    );
}