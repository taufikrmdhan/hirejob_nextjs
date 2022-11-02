import React, { useEffect } from "react";

import { useRouter } from "next/router";

export function protectedRoute(Component) {
  return (props) => {
    const router = useRouter();
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            router.push("/loginkerja/login");
        }
    }, []);
    return <Component {...props} />;
  };
}