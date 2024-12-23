
import {Users} from "./utils/data";
import UserComponent from "./pages/UserComponent.tsx";

function App() {

  return (
      <section>

          <UserComponent tabUsers={Users} />
      </section>
  )
}

export default App
