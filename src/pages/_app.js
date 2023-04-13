import '@/styles/globals.css'
import { useRouter } from 'next/router';

import { ClerkProvider, ClerkLoaded } from '@clerk/nextjs'


export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <ClerkProvider
      frontendApi={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
      navigate={(to) => router.push('./todos')}
    >
      <ClerkLoaded >
        <Component {...pageProps} />
      </ClerkLoaded>
    </ClerkProvider>
  )
}
