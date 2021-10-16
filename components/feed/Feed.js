import MiniProfile from "../miniProfile/MiniProfile"
import Posts from "../posts/Posts"
import Stories from "../stories/Stories"
import Suggestions from "../suggestions/Suggestions"


import { useSession } from "next-auth/react"

function Feed() {

    const { data: session } = useSession();
    return (
        <main className={`grid grid-cols-1 md:grid-cols-2 items-center md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto
        ${!session && "!grid-cols-1 !max-w-3xl "}`} >

            <section className={`col-span-1 md:col-span-2 ${!session && "!col-span-1"} `} >

                <Stories />
                <Posts />

            </section>

            {session && (
                <section className="hidden xl:inline-grid md:col-span-1" >
                    <div className="fixed top-16" >
                        <MiniProfile />
                        <Suggestions />
                    </div>


                </section>
            )

            }

        </main>
    )
}

export default Feed
