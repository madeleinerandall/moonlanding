// https://v5.reactrouter.com/web/guides/scroll-restoration
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  // useLocation returns an object which looks like this:
  // const location = {
  //   pathname: "x",
  //   ...
  // }
  // const { pathname }  = useLocation();
  // defines location.pathname without having to define the parent object
  // this is an example of a destructuring assignment

  useEffect(() => {
    // this function runs every time pathname changes
    // window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
