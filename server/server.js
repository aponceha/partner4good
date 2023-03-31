// const express = require('express');
// const { ApolloServer } = require("apollo-server-express");
// const path = require('path');
// const { typeDefs, resolvers } = require("./schemas");
// const db = require('./config/connection');
// const { authMiddleware } = require('./utils/auth');
// const app = express();
// const PORT = process.env.PORT || 3001;

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   context: authMiddleware,
// });

// server.applyMiddleware({ app });

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // if we're in production, serve client/build as static assets
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../client/build')));
// }

// // app.get("*", (req, res) => {
// //   res.send("Not found");
// // });

// db.once('open', () => {
//   app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
//   console.log(`GraphQL server ready at http://localhost:${PORT}${server.graphqlPath}`);
// });

const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
const { authMiddleware } = require("./utils/auth");
const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");
const PORT = process.env.PORT || 3002;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});
// true or false? other activities say "false" but our version said "true"
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// I ADDED THIS
// Serve up static assets
app.use("/images", express.static(path.join(__dirname, "../client/images")));
// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });
  db.once("open", () => {
    app.listen(PORT, () =>
      console.log(`:earth_africa: Now listening on localhost:${PORT}`)
    );
    console.log(
      `GraphQL server ready at http://localhost:${PORT}${server.graphqlPath}`
    );
  });
};
// Call the async function to start the server
startApolloServer(typeDefs, resolvers);