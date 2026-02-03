import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/dashboard/$companyId/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/dashboard/$companyId/"!</div>
}
