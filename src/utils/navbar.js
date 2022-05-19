import Contact from "../components/Contacts";
import { HomePage } from "../pages/Home";
import { PropertiesPage } from "../pages/Properties";

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
    id: 3,
    title: "Contacts",
    path: "/contacts",
    Element: <Contact />,

    search: "?",
    hidden: false,
    private: false,
  },
];
