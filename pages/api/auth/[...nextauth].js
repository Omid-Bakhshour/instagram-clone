
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
            name: 'credentials',

            async authorize(credentials) {
                // const user = {
                //     username: 'J Smith', email: 'jsmith@example.com'
                // }
                // return user;
                try {


                    let options = {
                        headers: {

                            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                        },
                    }


                    var data = JSON.stringify({
                        user: {
                            "username": credentials.username,
                            "password": credentials.password
                        }
                    });
                    let user = await axios.post(`http://192.168.1.102/achomestan2/authentication/login1`,
                        data, options
                    )
                    if (user?.data) {
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
    }, callbacks: {

        async session({ session, token, user }) {
            session.user.username = session.user.name.split(" ").join("").toLocaleLowerCase();
            session.user.uid = token;

            return session;
        }

    }
})

