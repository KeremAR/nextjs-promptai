import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';


console.log({
    clientId: process.env.GOOGLE_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
})

const handler = NextAuth({
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      })
    ],
    async session({ session }) {
        // Custom session callback logic
    },
    async signIn({ profile }) {
        try {
            // Custom sicatchgn in logic
        }catch  (error) {
            
        }
}});
export {handler as GET, handler as POST};