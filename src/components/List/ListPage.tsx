import React, { useMemo } from 'react'
import { RouteComponentProps } from 'react-router-dom'

import { useOrganization } from '../../api/orgaizationAPI'
import CategoryTabs from './CategoryTabs'
import { useStyles } from './ListPage.style'
import Menu from '../Menu'
import SubCategoryList from '../Dashboard/SubCategoryList'

const ListPage: React.FC<RouteComponentProps<{ tab: string }>> = ({
    match: {
        params: { tab },
    },
}) => {
    const { status, data, isFetching } = useOrganization('halmstad')
    const classes = useStyles()

    const activeTab = useMemo(() => {
        if (status === 'success') {
            const idx = data.categories.findIndex((c) => c.category_id === tab)
            return idx
        }
    }, [tab, data])

    return (
        <>
            <Menu>
                <CategoryTabs />
            </Menu>
            {status === 'success' && <SubCategoryList subcategories={data?.categories[activeTab].subcategories} />}
        </>
    )
}

export default ListPage
