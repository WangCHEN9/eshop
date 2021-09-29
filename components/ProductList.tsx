import { useLatestProductsQuery } from "../generated/graphql"

const LatestProducts = /* GraphQL */ `
query LatestProducts {
    products(first: 10, channel: "default-channel") {
        edges {
        node {
            id
            name
          	productType{
              name
              isDigital
            }
          	category{
              description
              name
            }
          	pricing{
              priceRange{
                start{
                  gross{
                    amount
                  }
                }
                stop{
                  gross{
                    amount
                  }
                }
              }
            }
            thumbnail{
            url
            }
        }
        }
    }
    }  
`

export function ProductList() {
    const { data, loading, error } = useLatestProductsQuery()

    if (loading) return <div>Loading..</div>
    if (error) return <div>Error when loading data !</div>

    if (data) {
        const latestProducts = data.products?.edges || [];

        return (
            <ul className="grid grid-cols-4 gap-4">
                {latestProducts.map(({ node: { name , thumbnail, pricing} }) =>
                    <li className="bg-white">
                        <img src={thumbnail?.url}/>
                        <div className="p2 border-gray-100 border-t">
                            <p className="block text-lg text-gray-900 truncate">{name}</p>
                            <p className="block text-sm font-medium text-gray-500">{pricing?.priceRange?.start?.gross?.amount}</p>
                        </div>
                    </li>
                )}
            </ul>
        )
    }
}