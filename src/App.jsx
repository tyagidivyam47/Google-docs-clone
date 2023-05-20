import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import TextEditor from "./component/TextEditor";

function App() {

  return (
    <div className="bg-[#F8F9FA]">
      <Header />
      <div className="flex">
        <div className="w-full">
          <TextEditor />
        </div>
        <div>
          <Sidebar />
        </div>
      </div>
    </div>
  )
}

export default App
