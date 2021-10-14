

function Suggestion({ userImg, username, worksAt }) {
    return (
        <div className="flex items-center justify-between mt-3" >
            <img src={userImg} alt="" className="w-10 h-10 rounded-full border p-[2px]" />
            <div className="flex-1 ml-4">
                <h2 className="font-semibold text-sm">{username}</h2>
                <h3 className="text-sm text-gray-400" >Works at {worksAt}</h3>
            </div>

            <button className="text-blue-400 text-xs font-bold" >Follow</button>

        </div>
    )
}

export default Suggestion
