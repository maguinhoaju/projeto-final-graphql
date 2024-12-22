import { gql } from "apollo-server";

const typeDefs = gql`
    type Query {
      welcome: String
      localizations: [localization]
      localization(id: String!): localization!
    }
    
    type Mutation {
        addLocalization(newLocalization: addLocalizationInput): localization!
        deleteLocalization(id: ID!): localization
    }
    
    input addLocalizationInput {
        nome: String
        latitude: Float
        longitude: Float
        cor: String
    }

    type localization {
        id: String
        nome: String
        latitude: Float
        longitude: Float
        cor: String
    }
`;

export default typeDefs;