import { Backdrop, CircularProgress, Container, Typography } from "@material-ui/core"
import React from "react"
import { useQuery } from "react-query"
import CategoryList from "./CategoryList"
import { Organization } from "./types"

const useOrganization = (organization_id: string) => {
    return useQuery<Organization, Error>("categories", async () => {
        const BASE_URL = 'https://t1vy4habx7.execute-api.eu-north-1.amazonaws.com/organizations'
        const res = await fetch(`${BASE_URL}/${organization_id}`)
        const data = await res.json()
        return data.Item
    }, { refetchOnWindowFocus: false })
}

const ListPage: React.FC = () => {
    const { data, isFetching } = useOrganization('halmstad')

    return (
        <Container maxWidth="sm">
            <Backdrop open={isFetching}>
                <CircularProgress />
            </Backdrop>
            <Typography variant="h2">{data?.organization_name}</Typography>
            <CategoryList categories={data?.categories} />
        </Container>
    )

}

export default ListPage