import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      type: 'credentials',
      name: 'Email and Password',

      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },

      authorize: async (credentials, req) => {
        const payload = {
          email: credentials?.username,
          password: credentials?.password,
        };
        const url = config?.apiBaseUrl;
        let res = null;
        console.log(url, 'url');
        try {
          res = await axios.post(url + '/user/login', payload);
        } catch (err) {
          const error = err;
          let errorData = error.response?.data;
          let errorMessage = errorData['message'];
          if (errorMessage) {
            console.log('------------>', errorMessage);
            throw new Error(errorMessage);
          } else {
            console.log('------dddddddddd------>', errorMessage);
            throw new Error('Something went wrong! please try again later.');
          }
        }
        const users = res;

        const details = users.data.data.user;
        const token = users.data.data.accessToken;

        const user = {
          id: details._id,
          token,
        };

        if (user) {
          return user;
        }

        return null;
      },
    }),

    /*  GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }), */
    // ...add more providers here
  ],

  pages: {
    signIn: '/', // Redirects to login screen when tried to access any page without logging in
    signOut: '/',
    error: '/', // Error code passed in query string as ?error=
    verifyRequest: '/auth/verify-request', // (used for check email message)
    newUser: '/auth/new-user', // New users will be directed here on first sign in (leave the property out if not of interest)
  },

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (user.hasOwnProperty('error')) {
        let userError = user?.error;
        throw new Error(userError);
      }
      return true;
    },

    async jwt({ user, token, session, trigger, account, profile }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      user && (token.user = user);

      if (trigger === 'update') {
        if (typeof session.isUSCitizenship !== 'undefined') {
          token.user.isUSCitizenship = session.isUSCitizenship;
        }
        if (typeof session.accessToken !== 'undefined') {
          token.user.token = session.accessToken;
          delete token.user.challengeName;
        }
      }
      return token;
      // if (Date.now() < token?.user?.accessTokenExpires - 900000) {
      //   token.user.idleTime = Date.now()
      //   return token
      // } else if (
      //   Date.now() <
      //   (token && token.user.idleTime + token?.user?.expiresIn * 1000)
      // ) {
      //   token.user.idleTime = Date.now()
      //   return refreshAccessToken(token)
      // } else {
      //   return token
      // }
    },

    async session({ session, token }) {
      console.log('------------------?>?>', session);
      session.user.id = token.sub;

      return session; // The return type will match the one returned in `useSession()`
    },
  },
  secret: process.env.AUTH_SECRET,
};

console.log('Next Auth');

export default NextAuth(authOptions);
