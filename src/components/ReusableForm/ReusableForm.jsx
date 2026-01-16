const ReusableForm = ({ submitBtnText = "Submit", handleSubmit, children }) => {
  const handleLocalSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      password: e.target.password.value,
    };
    handleSubmit(data);
  };

  return (
    <div className="my-8 py-8 border-slate-600 border-2">
      {children}
      <form
        onSubmit={handleLocalSubmit}
        className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg space-y-5"
      >
        {/* Name */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-600">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-600">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-600">
            Phone Number
          </label>
          <input
            type="text"
            name="phone"
            placeholder="Enter your phone"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Password */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            type="text"
            name="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Submit Button */}
        <input
          type="submit"
          value={submitBtnText}
          className="w-full py-2 text-white font-semibold rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 transition duration-300 cursor-pointer"
        />
      </form>
    </div>
  );
};

export default ReusableForm;
