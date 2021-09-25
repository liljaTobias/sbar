import { useQuery, UseQueryResult } from "react-query"

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

export const useCategories = (organizationId: string): UseQueryResult<Category[], Error> => {
    return useQuery<Category[], Error>(['categories', organizationId], async () => {
        const BASE_URL = 'https://t1vy4habx7.execute-api.eu-north-1.amazonaws.com/organizations'
        const res = await fetch(`${BASE_URL}/${organizationId}`)
        const data = await res.json()
        return data.Item.categories
    })
}
