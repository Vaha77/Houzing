import Contact from "../components/Contacts";
import { HomePage } from "../pages/Home";
import { PropertiesPage } from "../pages/Properties";
import SelectotHousePage from "../pages/Properties/SelectedHose";
import Signin from "../pages/Signin";
import SiginUp from "../pages/Signup";

export const navbar = [
  {
    id: 1,
    title: "Home",
    path: "/home",
    Element: <HomePage />,
    search: "?",
    hidden: false,
    private: false,
  },
  {
    id: 2,
    title: "Properties",
    path: "/properties",
    Element: <PropertiesPage />,

    search: "?",
    hidden: false,
    private: false,
  },
  {
    id: 2,
    title: "Selected House",
    path: "/properties/:id",
    Element: <SelectotHousePage />,
    useParams: true,
    search: "?",
    hidden: true,
    private: false,
  },
  {
    id: 3,
    title: "Contacts",
    path: "/contacts",
    Element: <Contact />,

    search: "?",
    hidden: false,
    private: false,
  },
  {
    id: 4,
    title: "Signin",
    path: "/signin",
    Element: <Signin />,
    search: "?",
    hidden: true,
    private: false,
  },
  {
    id: 5,
    title: "SignUp",
    path: "/signup",
    Element: <SiginUp />,
    search: "?",
    hidden: true,
    private: false,
  },
];
