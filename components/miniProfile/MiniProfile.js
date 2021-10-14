

function MiniProfile() {
    return (
        <div className="flex items-center justify-between mt-8 ml-10 " >
            <img src="https://lh3.googleusercontent.com/ogw/ADea4I63hAY1m6qVwise20ijlooItppdeTvwS52Yh1t1=s32-c-mo" alt=""
                className="rounded-full border p-[2px]  w-16 h-16" />
            <div className="flex-1 mx-4" >
                <h2 className="font-bold" >omid.b</h2>
                <h3 className="text-sm text-gray-400" >Welcome to Instagram</h3>

            </div>

            <button className="text-blue-400 text-sm font-semibold" >Sign Out</button>

        </div>
    )
}

export default MiniProfile
