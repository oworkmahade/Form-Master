import "./App.css";
import Grandpa from "./components/Grandpa/Grandpa";
import HookForm from "./components/HookForm/HookForm";
import RefForm from "./components/RefForm/RefForm";
import ReusableForm from "./components/ReusableForm/ReusableForm";

import SimpleForm from "./components/SimpleForm/SimpleForm";
import StatefulForm from "./components/StatefulForm/StatefulForm";

function App() {
  // const handleSignUpSubmit = (data) => {
  //   console.log("Sign Up Data", data);
  // };

  // const handleUpdateProfileSubmit = (data) => {
  //   console.log("Update Profile data:", data);
  // };

  return (
    <>
      <div>
        <Grandpa></Grandpa>
        {/* <ReusableForm handleSubmit={handleSignUpSubmit}>
          <div>
            <h1 className="text-3xl font-semibold">Sign Up </h1>
            <p className="my-4 font-semibold">Please Sign Up</p>
          </div>
        </ReusableForm> */}

        {/* <ReusableForm
          handleSubmit={handleUpdateProfileSubmit}
          submitBtnText={"Update"}
        >
          <div>
            <h1 className="text-3xl font-semibold">Update</h1>
            <p className="my-4 font-semibold">Please Keep Your Data Update</p>
          </div>
        </ReusableForm> */}

        {/* <h1 className="text-3xl font-bold">Form Master</h1> */}
        {/* <SimpleForm></SimpleForm> */}
        {/* <StatefulForm></StatefulForm> */}
        {/* <RefForm></RefForm> */}
        {/* <HookForm></HookForm> */}
      </div>
    </>
  );
}

export default App;
