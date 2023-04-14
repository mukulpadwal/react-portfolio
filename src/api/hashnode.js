// This function will help us fetch the articles from the hashnode api

// gql is the name of function which accepts two arguments
// query
// variables

export const gql = async (query, variables = {}) => {
    const data = await fetch(`https://api.hashnode.com/`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            query,
            variables
        })
    });

    return data.json();
}

export const GET_USER_ARTICLES = `
    query GetUserArticles($page: Int!) {
        user(username: "mukulpadwal") {
            publication {
                posts(page: $page) {
                    title
                    brief
                    slug
                    coverImage
                }
            }
        }
    }
`;