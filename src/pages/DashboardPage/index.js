import { Dashboard } from "./Dashboard";
import { Header } from "../../Components/Header/index";
import { BreadCrumb } from "../../Components/BreadCrumb/index";
import { Footer } from "../../Components/Footer/index";


export function DashboardPage() {
    return(
        <div>
            <Header />
            <BreadCrumb />
            <Dashboard />
            <Footer />
        </div>
    )
}