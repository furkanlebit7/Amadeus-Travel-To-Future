import Header from "./components/Header/Header";
import Search from "./components/Search";
import Navbar from "./components/Navbar/Navbar";
import FlightList from "./components/FlightList";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-whiteBg dark:bg-zinc-800 min-h-screen">
      <Navbar />
      <Header />
      <div className="relative max-w-5xl mx-auto  px-4">
        <Search />
        <FlightList />
      </div>
      <Footer />
    </div>
  );
}

export default App;
