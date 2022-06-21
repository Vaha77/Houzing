import Contact from "../components/Contacts";
import MyProporties from "../components/MyProporties";
import { HomePage } from "../pages/Home";
import { PropertiesPage } from "../pages/Properties";
import SelectotHousePage from "../pages/Properties/SelectedHose";
import Signin from "../pages/Signin";
import AddNew from "../pages/AddNew";
import SigninUp from "../components/Signup";
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
    id: 6,
    title: "Selected House",
    path: "/properties:id",
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
    Element: <SigninUp />,
    search: "?",
    hidden: true,
    private: false,
  },
  {
    id: 6,
    title: "My Proporties",
    path: "/myproporties",
    Element: <MyProporties />,
    search: "?",
    useParams: true,
    hidden: true,
    private: false,
  },
  {
    id: 7,
    title: "Add New ",
    path: "/proporties/addnew",
    Element: <AddNew />,
    search: "?",
    useParams: true,
    hidden: true,
    private: false,
  },
  {
    id: 8,
    title: " Edit Item",
    path: "/proporties/addnew/:id",
    Element: <AddNew />,
    search: "?",
    useParams: true,
    hidden: true,
    private: false,
  },
];
