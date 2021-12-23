import "./App.css";
import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import HooksContainer from "./components/HooksContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import CandyContainer from "./components/CandyContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import ItemContainer from "./components/ItemContainer";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer />
        <ItemContainer cake />
        <ItemContainer />
        <CakeContainer />
        <HooksContainer />
        <IceCreamContainer />
        <CandyContainer />
        <NewCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
