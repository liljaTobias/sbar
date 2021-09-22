import { useQuery, UseQueryResult } from "react-query"
import { Organization } from "../components/List/types"

export const useOrganization = (organization_id: string): UseQueryResult<Organization, Error> => {
    return useQuery<Organization, Error>("categories", async () => {
        const BASE_URL = 'https://t1vy4habx7.execute-api.eu-north-1.amazonaws.com/organizations'
        const res = await fetch(`${BASE_URL}/${organization_id}`)
        const data = await res.json()
        return data.Item
    }, { refetchOnWindowFocus: false })
}