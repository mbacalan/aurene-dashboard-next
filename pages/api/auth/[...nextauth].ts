import NextAuth from "next-auth/next";
import DiscordProvider from "next-auth/providers/discord";

export default NextAuth({
  providers: [
    DiscordProvider({
      clientId: process.env.CLIENT_ID as string,
      clientSecret: process.env.CLIENT_SECRET as string,
    })
  ],
  pages: {
    signIn: '/auth/signin',
  }
});
