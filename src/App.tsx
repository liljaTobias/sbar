import React, { useState } from 'react'

const App: React.FC = () => {
    const [test, setTest] = useState('hejsan')
    return (
        <div>
            <h1>{test}</h1>
            <input onChange={e => setTest(e.target.value)} />
        </div>
    )
}

export default App