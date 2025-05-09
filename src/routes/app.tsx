import { createFileRoute, Outlet } from '@tanstack/react-router'
import {Shell} from "@/features/shell/Shell"
import { SiteHeader } from '@/features/shell/side-header'

export const Route = createFileRoute('/app')({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <Shell>
            <SiteHeader />
            <div className="flex flex-1 flex-col">
                <div className="@container/main flex flex-1 flex-col gap-2">
                    <Outlet />
                </div>
            </div>
        </Shell>
    )
}
