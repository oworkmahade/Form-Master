import { useEffect, useRef } from "react";

const RefForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const passwordRef = useRef(null);
  const addressRef = useRef(null);

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
    console.log(phoneRef.current.value);
    console.log(passwordRef.current.value);
    console.log(addressRef.current.value);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg space-y-5"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Contact Information
        </h2>

        {/* Name */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-600">
            Full Name
          </label>
          <input
            ref={nameRef}
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
            ref={emailRef}
            type="email"
            name="email"
            defaultValue={"wtbl.hasan@gmail.com"}
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
            ref={phoneRef}
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
            ref={passwordRef}
            type="text"
            name="password"
            placeholder="Enter your Password"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Address */}
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-600">
            Address
          </label>
          <input
            ref={addressRef}
            type="text"
            name="address"
            placeholder="Enter your Address"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Submit Button */}
        <input
          type="submit"
          value="Submit"
          className="w-full py-2 text-white font-semibold rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 transition duration-300 cursor-pointer"
        />
      </form>
    </div>
  );
};

export default RefForm;
