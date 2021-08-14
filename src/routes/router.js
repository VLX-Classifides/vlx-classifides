import LandingPage from "../components/LandingPage/LandingPage";
import Checkout from "../containers/Checkout/checkout";
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

  {
    path: routes.checkout,
    name: "Checkout",
    component: Checkout,
  },
];

export default router;
