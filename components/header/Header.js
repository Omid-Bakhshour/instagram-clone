
import Image from "next/image"

import { SearchIcon, PlusCircleIcon, UserGroupIcon, HeartIcon, PaperAirplaneIcon, MenuIcon }
    from "@heroicons/react/outline"
import { HomeIcon }
    from "@heroicons/react/solid"
import { useSession } from "next-auth/react"

function Header() {

    const { data: session } = useSession();

    console.log(session);
    return (
        <div className="shadow-sm border-b bg-white w-full sticky top-0 z-[100] " >

            <div className="flex justify-between items-center bg-white max-w-6xl mx-5 xl:mx-auto">


                <div className="relative w-24 h-10 hidden lg:inline-grid cursor-pointer flex-shrink-0 " >
                    <Image src="/images/instaLogo.png" layout="fill" objectFit="contain" />

                </div>

                <div className="relative w-10 h-10 inline-grid lg:hidden  flex-shrink-0 cursor-pointer " >
                    <Image src="/images/insta-logo2.png" layout="fill" objectFit="contain" />

                </div>


                <div className=" relative p-3 rounded-md ">
                    <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none" >
                        <SearchIcon className="h-5 w-5 text-gray-500" />

                    </div>
                    <input className="bg-gray-50 block w-full pl-10 sm:text-xm border-gray-300 rounded-md focus:ring-black
                     focus:border-black " placeholder="Search" type="text" />
                </div>

                {/* right */}

                <div className="flex items-center justify-end space-x-4">
                    <HomeIcon className="navBtn" />
                    <MenuIcon className="h-6 md:hidden cursor-pointer" />
                    <div className="relative navBtn">
                        <PaperAirplaneIcon className="navBtn rotate-45" />
                        <div className="absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center
                        text-white animate-pulse">3</div>

                    </div>
                    <PlusCircleIcon className="navBtn" />
                    <UserGroupIcon className="navBtn" />

                    <HeartIcon className="navBtn" />

                    <img src="/images/sample1.jpg"
                        className="rounded-full h-10 cursor-pointer " alt="profilepic" />


                </div>


            </div>



        </div>
    )
}

export default Header
