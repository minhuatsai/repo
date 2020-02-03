import Home from "./pages/home";
import Contacts from "./pages/contacts";

export const routes = [
    {
        path:"/",
        component:Home,
        exact:true
    },
    {
        path:"/contacts",
        component:Contacts
    }
]