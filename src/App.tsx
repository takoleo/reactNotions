import {Link} from "react-router-dom";

function App() {

  return (
      <>
          <div className="relative ...">
              <div className="absolute top-2 left-5 text-xs   p-3 "> <span> les nouvelles vies </span> </div>
          </div>

      <section className="grid grid-cols-2	mx-auto h-screen ">
         <div className="bg-blue-700  text-white flex flex-column items-center justify-center" >
           <Link className="text-2xl border border-white  rounded-md p-3"  to={"/dashboard/users"}>les utilisateurs</Link>
         </div>

         <div className="flex flex-column items-center justify-center">
             <Link className="text-2xl border border-blue-800  rounded-md p-3"  to={"/dashboard/demandes"}>les Demande</Link>
         </div>
      </section>
      </>
  )
}

export default App
