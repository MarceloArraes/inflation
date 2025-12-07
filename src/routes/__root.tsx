import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <div style={{ padding: "1rem", fontFamily: "system-ui, sans-serif" }}>
        <nav style={{ marginBottom: "2rem", fontSize: "1.5rem" }}>
          <Link to="/" style={{ marginRight: "1rem" }}>
            Home
          </Link>
          <Link to="/about">About</Link>
          <Link to="/scroll">Scroll</Link>
        </nav>
        <hr />
        <Outlet />
      </div>

      {/* Remove this in production */}
      <TanStackRouterDevtools />
    </>
  ),
});