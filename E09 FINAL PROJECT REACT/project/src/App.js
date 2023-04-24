import "./App.css";
import UserContext from "./global/UserContext";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <UserContext.Provider>
        <Navbar />
        {/* <Main /> */}
        <Footer />
      </UserContext.Provider>
    </div>
  );
}

export default App;
