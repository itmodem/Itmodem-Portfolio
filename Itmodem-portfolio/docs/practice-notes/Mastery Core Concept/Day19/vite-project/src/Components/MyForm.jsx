import React, { useState } from 'react'

const MyForm = () => {
    const [name, setName] = useState("");
    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </div>
    )
}

export default MyForm
