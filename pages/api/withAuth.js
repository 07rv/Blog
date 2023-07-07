import { useRouter } from "next/router";
import { useEffect } from "react";

const withAuth = (WrappedComponent) => {
  console.log(WrappedComponent.name);
  const AuthComponent = (props) => {
    const router = useRouter();

    const isAuthenticated = true;

    useEffect(() => {
      if (!isAuthenticated) {
        router.replace("/login");
      }
    }, [isAuthenticated]);

    if (!isAuthenticated) {
      return <div>Loading...</div>;
    }

    return <WrappedComponent {...props} />;
  };

  return AuthComponent;
};

export default withAuth;
