

function Story({ img, username }) {
    return (
        <div>
            <img className="h-14 w-14 block rounded-full p-[1.5px] border-2 border-red-500 object-contain cursor-pointer
            hover:scale-110 transition transform ease-out" src={img} alt="" />
            <p className="text-xs w-14 truncate text-center">{username}</p>

        </div>
    )
}

export default Story
