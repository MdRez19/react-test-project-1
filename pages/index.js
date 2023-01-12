import { useState } from "react";
function Header({ title }){
    return <h1>{`cool ${title}`}</h1>
}

export default function HomePage() {
    const [likes, setLikes] = useState(0)
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
    function handleClick() {
        setLikes(likes + 1)
    }
    return (
        <div>
            <Header title="React 💙" />
            <ul>
                {names.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>
            <button onClick={handleClick}>like({likes})</button>
        </div>
    )
}

