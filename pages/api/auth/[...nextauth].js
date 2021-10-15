
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import Providers from 'next-auth/providers/credentials'


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
                const user = { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
                return user;
                // try {
                //     var bodyFormData = new FormData();

                //     // bodyFormData.append('username', credentials.username);
                //     // bodyFormData.append('password', credentials.password);
                //     bodyFormData.append('username', "09334482466");
                //     bodyFormData.append('password', "omid7896378963");
                //     const user = await axios.post(`127.0.0.1/achomestan2/authentication/login`,

                //         {
                //             data: bodyFormData,
                //         },
                //         {
                //             headers: {
                //                 headers: { "Content-Type": "multipart/form-data" },
                //             }
                //         })
                //     if (user) {
                //         console.log(user.data);
                //         return user.data;
                //     } else {
                //         return null;
                //     }
                // } catch (e) {
                //     throw new Error("There was an error on user authentication");
                // }
            }
        })

    ],
    pages: {
        signIn: "/auth/signin",
    },
    // session: {
    //     jwt: true,
    // },
    // jwt: {
    //     // A secret to use for key generation - you should set this explicitly
    //     // Defaults to NextAuth.js secret if not explicitly specified.
    //     secret: 'INp8IvdIyeMcoGAgFGoA61DdBglwwSqnXJZkgz8PSnw',
    // }
})




// const options = {
//     providers: [
//         Providers.Credentials({
//             // The name to display on the sign in form (e.g. 'Sign in with...')
//             name: 'Credentials',
//             // The credentials property is used to generate a suitable form on the sign in page.

//             async authorize(credentials) {
//                 // Authentication Logic: local function, external API call, etc
//                 const user = { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
//                 // try {
//                 //     const user = await axios.get("https://6043750da20ace001728e1a7.mockapi.io/api/v1/login/1");

//                 //     if (user) {
//                 //         console.log(user.data);
//                 //         return user.data;
//                 //     } else {
//                 //         return null;
//                 //     }
//                 // } catch (e) {
//                 //     throw new Error("There was an error on user authentication");
//                 // }
//             }
//         })
//     ],
//     session: {
//         jwt: true,
//     },
//     jwt: {
//         // A secret to use for key generation - you should set this explicitly
//         // Defaults to NextAuth.js secret if not explicitly specified.
//         secret: 'INp8IvdIyeMcoGAgFGoA61DdBglwwSqnXJZkgz8PSnw',
//     }
// }

// export default (req, res) => NextAuth(req, res, options);