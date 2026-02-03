import { getRouteApi } from '@tanstack/react-router'

const route = getRouteApi('/dashboard/$companyId/')

export default function useOptionalCompanyId(): string | undefined {
  try {
    const { companyId } = route.useParams()
    return companyId
  } catch {
    return undefined
  }
}
