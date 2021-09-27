import React, { useEffect, useMemo, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'

import { useOrganization } from '../../api/orgaizationAPI'
import CategoryTabs from './CategoryTabs'
import { useStyles } from './ListPage.style'
import Menu from '../Menu'
import SubCategoryList from '../Dashboard/SubCategoryList'
import { convertArrayToObject } from '../../utils/arrayHelpers'

const ListPage: React.FC<RouteComponentProps<{ tab: string }>> = ({
    match: {
        params: { tab },
    },
}) => {
    const [tabsOpenInCategories, setTabsOpenInCategories] = useState<any>([])
    const { status, data } = useOrganization('halmstad')
    const classes = useStyles()

    const activeTab = useMemo(() => {
        if (status === 'success') {
            const idx = data.categories.findIndex((c) => c.category_id === tab)
            return idx
        }
    }, [tab, data])

    useEffect(() => {
        if (status === 'success') {
            const subsObj = convertArrayToObject(data?.categories, 'category_id')
            setTabsOpenInCategories(subsObj)
        }
    }, [data, status])

    const handleListOpenClick = (idx: number, categoryId: string) => {
        const currentTab = tabsOpenInCategories[categoryId]
        const newArr = [...currentTab.slice(0, idx), !currentTab[idx], ...currentTab.slice(idx + 1)]
        const obj = {
            ...tabsOpenInCategories,
            [categoryId]: newArr,
        }
        setTabsOpenInCategories(obj)
    }

    return (
        <>
            <Menu>
                <CategoryTabs />
            </Menu>
            {status === 'success' && (
                <SubCategoryList
                    subcategories={data?.categories[activeTab].subcategories}
                    categoryId={tab}
                    openSubs={tabsOpenInCategories[tab]}
                    handleOpen={handleListOpenClick}
                />
            )}
        </>
    )
}

export default ListPage
