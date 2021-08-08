import LandingPage from "../components/LandingPage/LandingPage";
import Login from "../containers/Login/login";
import SignUp from "../containers/Signup/Signup";
import { routes } from "./routes";

const router = [
  {
    path: routes.home,
    name: "Home",
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
];

export default router;
