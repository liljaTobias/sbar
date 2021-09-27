import { useQuery, UseQueryResult } from 'react-query'

export interface SubCategory {
    subcategory_id: string
    subcategory_name: string
    actions: Map<string, string>
}

export interface Category {
    category_id: string
    category_name: string
    subcategories: Array<SubCategory>
}

export interface Organization {
    organization_id: string
    organization_name: string
    categories: Array<Category>
}

export const useOrganization = (organization_id: string): UseQueryResult<Organization, Error> => {
    return useQuery<Organization, Error>(
        'organization',
        async () => {
            const BASE_URL = 'https://t1vy4habx7.execute-api.eu-north-1.amazonaws.com/organizations'
            const res = await fetch(`${BASE_URL}/${organization_id}`)
            const data = await res.json()
            return data.Item
        },
        { refetchOnWindowFocus: false },
    )
}
