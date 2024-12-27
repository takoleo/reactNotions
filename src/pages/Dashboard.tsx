
import {Link, Outlet} from "react-router-dom";


function Dashboard() {
    return (
        <section>
            <header>
              <Link className="text-2xl   rounded-md px-5  py-4 block"  to={"/"}>LES NOUVELLES VIES</Link>
            </header>
            <main className="container mx-auto">
                <Outlet />
            </main>

        </section>
    )
}

export default Dashboard
