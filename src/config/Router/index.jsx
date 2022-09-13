import Home from "../../containers/page/Home";

const pageRoutes = () => {
  return [
    {
      path: "/",
      link: "/home",
      name: "DashBoard",
      element: Home,
    },
  ];
};

export default pageRoutes();
