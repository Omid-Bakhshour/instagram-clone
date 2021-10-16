
import { useSession, signOut } from "next-auth/react"

function MiniProfile() {

    const { data: session } = useSession();
    return (
        <div className="flex items-center justify-between mt-8 ml-10 " >
            <img src={session?.user?.image} alt=""
                className="rounded-full border p-[2px]  w-16 h-16" />
            <div className="flex-1 mx-4" >
                <h2 className="font-bold" >{session?.user?.username}</h2>
                <h3 className="text-sm text-gray-400" >Welcome to Instagram</h3>

            </div>

            <button onClick={signOut} className="text-blue-400 text-sm font-semibold" >Sign Out</button>

        </div>
    )
}

export default MiniProfile
