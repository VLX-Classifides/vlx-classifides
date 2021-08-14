import LandingPage from "../components/LandingPage/LandingPage";
import Home from "../containers/Home/Home";
import Login from "../containers/Login/login";
import SignUp from "../containers/Signup/Signup";
import { routes } from "./routes";

const router = [
  {
    path: routes.landing,
    name: "Landing",
    component: LandingPage,
  },
  {
    path: routes.login,
    name: "Login",
    component: Login,
  },
  {
    path: routes.signup,
    name: "Sign Up",
    component: SignUp,
  },
  {
    path: routes.home,
    name: "Home",
    component: Home,
  },
];

export default router;
