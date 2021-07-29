import React, { useState } from 'react'
import { useHistory } from 'react-router'

const LandingPage: React.FC = () => {
    const [urlInput, setUrlInput] = useState('')
    const history = useHistory()

    const handleInput = (url: string) => {
        history.push(`/parsed/${url}`)
    }

    return (
        <div>
            <input onChange={(e) => setUrlInput(e.target.value)} />
            <button onClick={() => handleInput(urlInput)}>Parse</button>
        </div>
    )
}

export default LandingPage