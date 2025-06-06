import {
	HeadContent,
	Outlet,
	Scripts,
	createRootRoute,
} from "@tanstack/react-router";

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "Yet Another Tanstack Router, shadcn Boilerplate",
			},
		],
	}),
	component: RootComponent,
});

function RootComponent() {
	return (
		<>
			<HeadContent />
			<Outlet />
			<Scripts />
		</>
	);
}
