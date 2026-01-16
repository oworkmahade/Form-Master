import useInputState from "../../hooks/useInputState";

const HookForm = () => {
  //   const [name, setName] = useInputState("");
  const nameState = useInputState("");

  //   const [email, setEmail] = useInputState("");
  //   const [phone, setPhone] = useInputState("");
  //   const [password, setPassword] = useInputState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nameState.value);
    // console.log("name :", name);
    // console.log("email :", email);
    // console.log("phone:", phone);
    // console.log("password:", password);
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
            // value={name}
            // onChange={setName}

            {...nameState}
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
            // value={email}
            // onChange={setEmail}
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
            // value={phone}
            // onChange={setPhone}
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
            // value={password}
            // onChange={setPassword}
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
          value="Submit"
          className="w-full py-2 text-white font-semibold rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 transition duration-300 cursor-pointer"
        />
      </form>
    </div>
  );
};

export default HookForm;
