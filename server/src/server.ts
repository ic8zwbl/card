import { ApolloServer } from "apollo-server-express";
import express from "express";
import mongoose from "mongoose";
import { userHandler } from "./handler/user";
import graphqlSchema from "./schema";

export const startServer = async () => {
  const MONGO_URI = `mongodb+srv://guy:eeZY60XsGUkLgQTa@cluster0.pzbyp.mongodb.net/card?retryWrites=true&w=majority`
  const PORT = process.env.PORT || 8000;

  const app = express();

  await mongoose
    .connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })
    .then((x) => console.log("Connected to mongodb"))
    .catch((err) => console.log(err));

  const server = new ApolloServer({ schema: graphqlSchema });
  server.applyMiddleware({ app });

  app.get("/user", userHandler);

  app.listen(PORT, () => {
    console.log(`🚀 Starting on port ${PORT}`);
  });
};
