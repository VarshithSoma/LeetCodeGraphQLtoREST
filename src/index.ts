import express, { Request, Response } from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import bodyParser from "body-parser";
import axios from "axios";
import { gql } from "graphql-tag";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

interface Todo {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
}

async function startServer() {
  const app = express();
  app.use(bodyParser.json());

  const typeDefs = gql`
    type Todo {
      id: ID!
      title: String!
      completed: Boolean
    }
    type Query {
      getTodos: [Todo]
    }
  `;
  const resolvers = {
    Query: {
      getTodos: async () => {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        return res.data;
      },
    },
  };
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();

  app.use(cors());
  app.use(express.json());
  app.use("/graphql", expressMiddleware(server));

  app.listen(6050, () => {
    console.log("Server running at http://localhost:6050/graphql");
  });
}

startServer();
