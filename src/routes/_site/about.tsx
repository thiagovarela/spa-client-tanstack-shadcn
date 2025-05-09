import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_site/about')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_site/about"!</div>
}
