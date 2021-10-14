import Posts from "../posts/Posts"
import Stories from "../stories/Stories"


function Feed() {
    return (
        <main className="grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto" >

            <section className="col-span-1 md:col-span-2" >

                {/* stories */}
                <Stories />
                {/* posts */}
                <Posts />

            </section>

            <section>

            </section>

        </main>
    )
}

export default Feed
