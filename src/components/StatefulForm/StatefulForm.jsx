import { useState } from "react";

const StatefulForm = () => {
  const [phone, setPhone] = useState(null);
  const [name, setName] = useState("Mahade Hasan");
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState("");

  // form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
    console.log(name);
    console.log(phone);

    if (password.length < 6) {
      setError("Password must be 6 character or longer ! ");
    } else {
      setError("");
    }
  };

  // phone change (individual field state)
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  // name change (individual field state)
  const handleNameChange = (e) => {
    // console.log(e.target.value);
    setName(e.target.value);
  };

  // password change (individual field state)
  const handlePasswordChange = (e) => {
    // console.log(e.target.value);
    setPassword(e.target.value);
  };

  // email change (individual field state )
  const handleEmailChange = (e) => {
    // console.log(e.target.value);
    setEmail(e.target.value);
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
            onChange={handleNameChange}
            type="text"
            name="name"
            value={name}
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
            onChange={handleEmailChange}
            type="email"
            name="email"
            placeholder="Enter your email"
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
            onChange={handlePasswordChange}
            type="password"
            name="password"
            placeholder="Enter your password"
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
            onChange={handlePhoneChange}
            type="text"
            name="phone"
            placeholder="Enter your phone"
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

        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default StatefulForm;
