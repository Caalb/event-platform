import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4p0ulb21ix001z40g8l6ifk/master",
  cache: new InMemoryCache()
});
