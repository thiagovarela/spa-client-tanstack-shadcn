import { Dashboard } from "@/features/dashboard/dashboard";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/app/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
			<Dashboard />
		</div>
	);
}
