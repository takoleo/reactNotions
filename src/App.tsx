
import {Users} from "./utils/data";
import UserComponent from "./pages/UserComponent.tsx";

function App() {

  return (
      <section className="container mx-auto">
          <UserComponent tabUsers={Users} />
      </section>
  )
}

export default App
