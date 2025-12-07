import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div>
      <h1>Welcome Home!</h1>
      <p>Your TanStack Router + Vite + React app is running perfectly.</p>
    </div>
  );
}