import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { users } from '@/lib/user';

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: {},
                password: {},
            },
            async authorize(credentials) {
                const user = users.find(
                    (u) =>
                        u.email === credentials?.email &&
                        u.password === credentials?.password
                );

                if (user) {
                    return { id: user.id, name: user.name, email: user.email };
                }

                return null;
            },
        }),
    ],
    session: {
        strategy: 'jwt',
    },
    pages: {
        signIn: '/auth/signin',
    },
});

export { handler as GET, handler as POST };
