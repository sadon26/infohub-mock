const Home = () => import(/* webpackChunkName: "Home" */ "../views/Index.vue");
const Login = () =>
  import(/* webpackChunkName: "Login" */ "../views/auth/Login");
const ResetPassword = () =>
  import(
    /* webpackChunkName: "ResetPassword" */ "../views/auth/ResetPassword/Index.vue"
  );
const CreateAccount = () =>
  import(
    /* webpackChunkName: "CreateAccount" */ "../views/auth/CreateAccount/Index.vue"
  );
const VerifyEmail = () =>
  import(
    /* webpackChunkName: "CreateAccount" */ "../views/auth/VerifyEmail/Index.vue"
  );

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/auth/login",
    name: "login",
    component: Login,
  },
  {
    path: "/auth/reset-password",
    name: "resetPassword",
    component: ResetPassword,
  },
  {
    path: "/auth/create-account",
    name: "createAccount",
    component: CreateAccount,
  },
  {
    path: "/auth/verify-email",
    name: "verifyEmail",
    component: VerifyEmail,
  },
];

export default routes;
