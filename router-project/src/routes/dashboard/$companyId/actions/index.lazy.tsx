import { createLazyFileRoute } from '@tanstack/react-router'
import useOptionalCompanyId from '@/hooks/useOptionalCompanyId'

export const Route = createLazyFileRoute('/dashboard/$companyId/actions/')({
  component: RouteComponent,
})

function RouteComponent() {
  const companyId = useOptionalCompanyId()
  console.log('companyId in actions route:', companyId, companyId !== undefined)
  return <div>Hello "/dashboard/$companyId/actions/"!</div>
}
