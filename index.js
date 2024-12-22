import { ApolloServer } from "apollo-server";
import typeDefs from "./scr/schema.js";
import Query from "./scr/resolvers/query.js";
import Mutation from "./scr/resolvers/mutation.js";
import { localizations } from "./scr/database.js";

//const resolvers = { Query, Mutation };
const resolvers = { Query, Mutation };
const context = { localizations };

const server = new ApolloServer( { typeDefs: typeDefs, resolvers, context } );
server
    .listen()
    .then((serverInfo) => {
        console.log(`Serviço em execução: ${serverInfo.url}`);
    });