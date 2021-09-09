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