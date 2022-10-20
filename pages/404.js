import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      // router.go(-1) // This will redirect user to last url in browser history
      router.push("/");
    }, 3000);
  }, []);
  return (
    <div className="not-found">
      <h1> Oops.... </h1>
      <h2> Page Not Found</h2>
      <p>
        {" "}
        Go back to the{" "}
        <Link href="/">
          <a> Home page </a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
