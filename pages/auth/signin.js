import { getProviders, signIn } from "next-auth/react"

export default function SignIn({ providers }) {
    return (
        <>
            <div >
                <button onClick={() => signIn('credentials')}>
                    Sign in with
                </button>
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

