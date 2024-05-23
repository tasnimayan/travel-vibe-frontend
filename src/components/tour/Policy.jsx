import { useSelector } from "react-redux";

const Policy = () => {
    const {tourDetails} = useSelector(state => state.tour)
  return (
    <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4 text-gray-900">Policy</h1>

        <div className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            {tourDetails.policy}
        </div>


        <h2 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Cancellation</h2>

        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            We may collect the following information:
        </p>

        <ul className="list-disc list-inside mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            <li>Your name and contact information</li>
            <li>Demographic information</li>
            <li>Other information relevant to customer surveys and/or offers</li>
        </ul>

        <h2 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Refund</h2>

        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            We require this information to understand your needs and provide you with a better service, and in
            particular
            for
            the following reasons:
        </p>

        <ul className="list-disc list-inside mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            <li>Internal record keeping</li>
            <li>Improving our products and services</li>
            <li>Sending promotional emails about new products, special offers, or other information which we think you
                may
                find
                interesting</li>
            <li>From time to time, we may also use your information to contact you for market research purposes. We may
                contact
                you by email, phone, or mail. We may use the information to customize the website according to your
                interests.</li>
        </ul>

        <h2 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Tour</h2>

        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            We require this information to understand your needs and provide you with a better service, and in
            particular
            for
            the following reasons:
        </p>

        <ul className="list-disc list-inside mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            <li>Internal record keeping</li>
            <li>Improving our products and services</li>
            <li>Sending promotional emails about new products, special offers, or other information which we think you
                may
                find
                interesting</li>
            <li>From time to time, we may also use your information to contact you for market research purposes. We may
                contact
                you by email, phone, or mail. We may use the information to customize the website according to your
                interests.</li>
        </ul>

        <h2 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Security</h2>

        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            We are committed to ensuring that your information is secure. In order to prevent unauthorized access or
            disclosure,
            we have put in place suitable physical, electronic, and managerial procedures to safeguard and secure the
            information we collect online.
        </p>

    </div>
  );
};

export default Policy;