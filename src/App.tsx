import "./App.css";
import Kvallsrutin from "./components/Kvallsrutin";

function App() {
  return (
    <div className="min-h-screen bg-white text-black p-4">
      <h1 className="text-4xl font-bold text-center my-6">
        🌙⭐ Barnets kvällslista ⭐🌙
      </h1>

      <Kvallsrutin />
    </div>
  );
}

export default App;
