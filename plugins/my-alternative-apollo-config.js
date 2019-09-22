export default function(context) {
  return {
    httpEndpoint: 'http://localhost:1337/graphql-alt',
    getAuth: () => 'Bearer my-static-token' // use this method to overwrite functions
  }
}
