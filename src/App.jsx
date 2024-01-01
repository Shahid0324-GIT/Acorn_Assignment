import Footer from "./components/Footer";
import Jobs from "./components/Jobs";
import Navbar from "./components/Navbar";
import Questions from "./components/Questions";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <>
      <div className="main-container">
        <Sidebar />
        <div className="navbar-questions-jobs-container">
          <Navbar />
          <div className="questions-jobs-container">
            <Questions />
            <Jobs />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
