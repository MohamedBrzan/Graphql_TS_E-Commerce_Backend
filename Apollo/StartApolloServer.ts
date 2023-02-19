import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import resolvers from '../graphql/Resolvers/Resolvers';
import typeDefs from '../graphql/TypeDefs/TypeDefs';
import WorkerModel from '../Models/Worker';
import ClientModel from '../Models/Client';
import JobModel from '../Models/Job';
import i18next from 'i18next';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

export default async () => {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
    context: async ({ req, res }) => ({
      WorkerModel,
      ClientModel,
      JobModel,
      req,
      res,
      translate: i18next.t,
    }),
  });
  console.log(`🚀  Server ready at: ${url}`);
  return server;
};
export { server };
