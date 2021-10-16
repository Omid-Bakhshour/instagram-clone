import { getProviders, signIn } from "next-auth/react"
import Header from "../../components/header/Header"

import { useState } from "react"


export default function SignIn({ providers }) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        async function sign() {
            const result = await signIn("credentials", {
                callbackUrl: "/",
                "username": username,
                "password": password,
            })

        }

        sign();



    }
    return (
        <>

            <div className="w-full bg-[#fafafa] min-h-screen" >


                <Header />

                <div onSubmit={(e) => handleSubmit(e)} className="w-full flex  items-center  py-5  px-3 md:px-0  md:py-0  min-h-[calc(100vh-67px)]    " >


                    <form className='w-full flex flex-col items-center  mx-auto  bg-white max-w-[450px] p-5 gap-y-5 
                          border shadow-sm border-gray-200 h-full' >

                        <img src="/images/instaLogo.png" className="w-48" alt="" />

                        <div className="w-full    flex  ">
                            <input className='w-full  outline-none ring-1 ring-gray-200 rounded-sm h-10 py-1 bg-[#fafafa] px-3 
                        focus:ring-gray-400' placeholder="Phone number, username, or email"
                                value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>


                        <div className=" w-full flex  ">
                            <input className='w-full  outline-none ring-1 ring-gray-200 rounded-sm h-10 py-1 bg-[#fafafa] px-3 
                        focus:ring-gray-400' placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>


                        <button type="submit" className="w-full text-white bg-blue-500 hover:bg-blue-700 transition transform ease-out duration-150
                           py-2 rounded-md " >Log In</button>

                    </form>


                </div>
            </div>

        </>
    )
}

export async function getServerSideProps() {
    const providers = await getProviders()
    return {
        props: {
            providers,
        },
    }
}

