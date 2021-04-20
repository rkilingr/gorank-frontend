import About from "./views/About/About";
import CreateQuiz from "./views/CreateQuiz/CreateQuiz";
import Home from "./layouts/Home/HomeSemantic";
import { Dashboard } from "./layouts/Home/Dashboard";

const dashboardRoutes = [
  {
    path: "about",
    name: "About",
    icon: null,
    isAuthed: false,
    component: About,
    layout: "/",
  },
  {
    path: "dashboard",
    name: "Dashboard",
    icon: null,
    isAuthed: true,
    component: Dashboard,
    layout: "/",
  },
  {
    path: "createquestion",
    name: "Create Question",
    icon: null,
    isAuthed: true,
    component: CreateQuiz,
    layout: "/",
  },
  {
    path: "login",
    name: "Login",
    icon: null,
    isAuthed: false,
    component: About,
    layout: "/",
  },
  {
    path: "",
    name: "Home",
    icon: null,
    isAuthed: false,
    component: Home,
    layout: "/",
  },
];

export default dashboardRoutes;
