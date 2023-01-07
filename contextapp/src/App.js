import BookingList from "./components/BookingList";
import Navbar from "./components/Navbar";
import {ThemeContextProvider} from "./context/ThemeContext";
import ThemeToggle  from '../src/components/ThemeToggle';


function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <BookingList />
        <ThemeToggle />
      </ThemeContextProvider>
    </div>
  );
}

export default App;

//context api -> share state within a component tree

