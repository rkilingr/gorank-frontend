import About from "./views/About/About";
import CreateQuestion from "./views/CreateQuestion/CreateQuestion";
import Home from "./layouts/Home/Home";

const dashboardRoutes = [
  {
    path: "about",
    name: "About",
    icon: null,
    component: About,
    layout: "/",
  },
  {
    path: "createquestion",
    name: "Create Question",
    icon: null,
    component: CreateQuestion,
    layout: "/",
  },
  {
    path: "",
    name: "Home",
    icon: null,
    component: Home,
    layout: "/",
  },
];

export default dashboardRoutes;
