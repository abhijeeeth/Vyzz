import React from 'react';

const ContactForm = () => {
  return (
    <div className="bg-gray-100 rounded-lg shadow-md p-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center sm:text-4xl">Contact Us</h2>
        <p className="text-gray-700 text-center sm:mb-8">Please fill out the form below to get in touch with us.</p>

        <div className="mt-8">
          <form className="grid grid-cols-3 gap-4 sm:grid-cols-4 sm:gap-6 lg:gap-8">
            <div className="col-span-2 sm:col-span-1">
              <label className="block text-gray-700 font-bold mb-2">Name</label>
              <input
                type="text"
                className="form-input w-full sm:w-auto rounded-md bg-transparent shadow-none focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="col-span-2 sm:col-span-1">
              <label className="block text-gray-700 font-bold mb-2">Email</label>
              <input
                type="email"
                className="form-input w-full sm:w-auto rounded-md bg-transparent shadow-none focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                placeholder="Enter your email address"
                required
              />
            </div>

            <div className="col-span-3 sm:col-span-2">
              <label className="block text-gray-700 font-bold mb-2">Company Name</label>
              <input
                type="text"
                className="form-input w-full sm:w-auto rounded-md bg-transparent shadow-none focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                placeholder="Enter your company name"
                required
              />
            </div>

            <div className="col-span-1">
              <label className="block text-gray-700 font-bold mb-2">Country</label>
              <select
                className="form-select w-full rounded-md bg-transparent shadow-none focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                required
              >
                <option value="default">Select Country</option>
                <option value="usa">United States</option>
                <option value="canada">Canada</option>
                <option value="uk">United Kingdom</option>
                <option value="australia">Australia</option>
              </select>
            </div>

            <div className="col-span-4">
              <label className="block text-gray-700 font-bold mb-2">Message</label>
              <textarea
                className="form-textarea w-full h-24 rounded-md bg-transparent shadow-none focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                placeholder="Enter your message"
                required
              />
            </div>

            <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg mt-4 sm:w-auto">Submit</button>
          </form>

        </div>
      </div>
    </div>
  );
};

export default ContactForm;
