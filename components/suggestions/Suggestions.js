
import { useState, useEffect } from "react"
import faker from "faker"
import Suggestion from "./Suggestion"

function Suggestions() {

    const [suggestions, setSuggestions] = useState([])

    useEffect(() => {

        const suggestions = [...Array(5)].map((_, i) => (
            {
                ...faker.helpers.contextualCard(),
                id: i

            }

        ))

        setSuggestions(suggestions);

    }, [])
    return (
        <div className="mt-4 ml-10" >
            <div className="flex justify-between text-sm mb-5">
                <h3 className="font-bold text-gray-400" >Suggestions for you</h3>
                <button className="text-gray-600 font-semibold" >See All</button>
            </div>

            {suggestions.map(item => (
                <Suggestion key={item.id} is={item.id} userImg={item.avatar} username={item.username}
                    worksAt={item.company.name} />
            ))

            }

        </div>
    )
}

export default Suggestions
