import "./styles.css";
import SoundProgram from "./components/VolumeButton/SoundProgram";
import SelectCountry from "./components/SelectCountry/SelectCountry";
import AddCartButton from "./components/AddCartButton/AddCartButton";
import UserContextPractice from "./components/UseContextPractice/UseContextPractice";
import { userContext } from "./Utility/UserContext";
import { User } from "./Utility/User";
export default function App() {
  return (
    <div className="App">
      <h1>Machine Round Practices : </h1>
      {/* <SoundProgram /> */}
      {/* <SelectCountry /> */}
      {/* <AddCartButton /> */}

      <userContext.Provider value={User}>
        <UserContextPractice />
      </userContext.Provider>
    </div>
  );
}
