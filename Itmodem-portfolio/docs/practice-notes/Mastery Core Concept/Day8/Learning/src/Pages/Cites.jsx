import React from 'react'

const Cites = () => {
    const cites = ["Dehli", "Mumbai", "Patna", "Uttarpradesh"]
    return (
        <div>
            <h2>Cites List Names</h2>
            {cites.map((cites, i) => (
                <ul>
                    <li key={i}>{cites}</li>
                </ul>
            ))}
        </div>
    )
}

export default Cites
