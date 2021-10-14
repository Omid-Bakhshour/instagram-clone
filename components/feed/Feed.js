import MiniProfile from "../miniProfile/MiniProfile"
import Posts from "../posts/Posts"
import Stories from "../stories/Stories"
import Suggestions from "../suggestions/Suggestions"


function Feed() {
    return (
        <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto" >

            <section className="col-span-1 md:col-span-2" >

                <Stories />
                <Posts />

            </section>

            <section className="hidden xl:inline-grid md:col-span-1" >
                <div className="fixed top-16" >
                    <MiniProfile />
                    <Suggestions />
                </div>


            </section>

        </main>
    )
}

export default Feed
