import React from 'react'
import { useParams } from 'react-router'
import { IRouteParams } from '../../utils/types'

const Parsed: React.FC = () => {
    const { url } = useParams<IRouteParams>()
    return (
        <div>
            <h1>Parsed</h1>
            <h2>{url}</h2>
        </div>
    )
}

export default Parsed