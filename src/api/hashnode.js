// This function will help us fetch the articles from the hashnode api

// gql is the name of function which accepts two arguments
// query
// variables

export const gql = async (query) => {
  const data = await fetch(`https://gql.hashnode.com`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      query,
    }),
  })

  return data.json()
}

export const GET_USER_ARTICLES = `
query Publication {
    publication(host: "mukulpadwal.hashnode.dev") {
      posts(first:20){
        edges {
          node {
            id,
            slug,
            title,
            url,
            cuid,
            coverImage {
              url
            },
            brief,
            readTimeInMinutes,
            publishedAt
          }
        }
      }
    }
  }
`
