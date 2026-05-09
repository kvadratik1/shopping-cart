import { Link, useRouteError } from "react-router";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div>
      <h1>Oops...</h1>
      <p>Something went wrong</p>

      <p>{error?.message}</p>

      <Link to="/">Go Home</Link>
    </div>
  );
}
