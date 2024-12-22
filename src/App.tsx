import Message from "./component/MessageComponent.tsx";

function App() {

  return (
      <section>
          <Message firstName="Achille" lastName="Mbougueng" email="achille.mbougueng@yahoo.fr"/>
          <Message firstName="chillo" lastName="TECH"  phone={998887}/>
          <Message firstName="dev" lastName="OPS" />
      </section>
  )
}

export default App
