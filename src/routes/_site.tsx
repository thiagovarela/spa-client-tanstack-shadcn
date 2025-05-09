import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_site")({
	component: RouteComponent,
});

function RouteComponent() {
	return <Outlet />;
}
