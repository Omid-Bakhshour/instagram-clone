
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import Providers from 'next-auth/providers/credentials'
import axios from 'axios'

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        Providers({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'credentials',

            async authorize(credentials) {
                // Authentication Logic: local function, external API call, etc
                // const user = { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
                // return user;
                try {
                    var bodyFormData = new FormData();

                    // bodyFormData.append('username', credentials.username);
                    // bodyFormData.append('password', credentials.password);
                    bodyFormData.append('username', "09334482466");
                    bodyFormData.append('password', "omid7896378963");

                    const options = {
                        headers: { 'Content-Type': 'multipart/form-data' }
                    };
                    const user = await axios.post(`https://192.168.1.102/achomestan/authentication/login`, bodyFormData, options)
                    if (user) {
                        console.log(user.data);
                        return user.data;
                    } else {
                        return null;
                    }
                } catch (e) {
                    throw new Error("There was an error on user authentication");
                }
            }
        })

    ],
    pages: {
        signIn: "/auth/signin",
    },
    session: {
        jwt: true,
    },
    jwt: {
        // A secret to use for key generation - you should set this explicitly
        // Defaults to NextAuth.js secret if not explicitly specified.
        secret: 'INp8IvdIyeMcoGAgFGoA61DdBglwwSqnXJZkgz8PSnw',
    }
})

