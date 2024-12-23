import { gql } from "apollo-server";

const typeDefs = gql`
    type Query {
      welcome: String
      localizations: [localization]
      localization(id: String!): localization!
    }
    
    type Mutation {
        addLocalization(newLocalization: addLocalizationInput): localization!
        deleteLocalization(id: String!): String
        updateLocalization(localization: updateLocalizationInput): localization!
    }
    
    input addLocalizationInput {
        nome: String
        latitude: Float
        longitude: Float
        cor: String
    }

    input updateLocalizationInput {
        id: String
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