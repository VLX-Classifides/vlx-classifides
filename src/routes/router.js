import LandingPage from "../components/LandingPage/LandingPage";
import Advertisements from "../containers/Advertisements/advertisements";
import Checkout from "../containers/Checkout/checkout";
import Home from "../containers/Home/Home";
import Login from "../containers/Login/login";
import ProductDetails from "../containers/ProductDetails/productDetails";
import SignUp from "../containers/Signup/Signup";
import Logout from "../components/Logout/logout";
import { routes } from "./routes";
import PendingProductDetails from "../containers/Home/PendingProducts/PendingProductDetails";
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
  {
    path: routes.productDetails,
    name: "Product Details",
    component: ProductDetails,
  },
  {
    path: routes.ads,
    name: "Advertisements",
    component: Advertisements,
  },
  {
    path: routes.pendingproductdetails,
    name: "PendingProductDetails",
    component: PendingProductDetails,
  },
  {
    path: routes.logout,
    name: "Logout",
    component: Logout,
  },
];

export default router;
