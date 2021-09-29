import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client"

const client = new ApolloClient({
  uri : 'https://demo.saleor.io/graphql/',
  cache: new InMemoryCache()
})


function MyApp({ Component, pageProps }: AppProps) {
  return <ApolloProvider client={client} >
    <Component {...pageProps} />
    </ApolloProvider > 
}
export default MyApp
