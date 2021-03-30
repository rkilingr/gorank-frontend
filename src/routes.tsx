import About from "./views/About/About";
import CreateQuiz from "./views/CreateQuiz/CreateQuiz";
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
    component: CreateQuiz,
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
