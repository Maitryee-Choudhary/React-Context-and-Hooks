import BookingList from "./components/BookingList";
import Navbar from "./components/Navbar";
import {ThemeContextProvider} from "./context/ThemeContext";


function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <BookingList />
      </ThemeContextProvider>
    </div>
  );
}

export default App;

//context api -> share state within a component tree

