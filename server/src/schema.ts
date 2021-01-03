import { NonNullComposer, schemaComposer } from "graphql-compose";
import { composeMongoose } from "graphql-compose-mongoose";
import { userHandler } from "./handler/user";
import { User, UserModel } from "./models/user";

// user resolvers
const UserTC = composeMongoose(UserModel as any);

// UserTC.addRelation("refered", {
//   resolver: UserTC.mongooseResolvers.findById,
//   prepareArgs: {
//     _id: (source: User) => source.refered,
//   },
//   projection: { refered: true },
// });
const x = schemaComposer.createObjectTC({
  name: "UserHandleReturn",
  fields: { user: "Float!" },
});
const _ = UserTC.addResolver({
  name: "userHandle",
  kind: "mutation",
  type: x,
  args: { ip: "Float!", id: "MongoID", referedBy: "MongoID" },
  resolve: async (_: any) => await userHandler(_),
});

schemaComposer.Query.addFields({
  userById: UserTC.mongooseResolvers.findById(),
  userByIds: UserTC.mongooseResolvers.findByIds(),
  userOne: UserTC.mongooseResolvers.findOne(),
  userMany: UserTC.mongooseResolvers.findMany(),
  userDataLoader: UserTC.mongooseResolvers.dataLoader(),
  userDataLoaderMany: UserTC.mongooseResolvers.dataLoaderMany(),
  userCount: UserTC.mongooseResolvers.count(),
  userConnection: UserTC.mongooseResolvers.connection(),
  userPagination: UserTC.mongooseResolvers.pagination(),
});

schemaComposer.Mutation.addFields({
  userHandle: UserTC.getResolver("userHandle"),
  userCreateOne: UserTC.mongooseResolvers.createOne(),
  userCreateMany: UserTC.mongooseResolvers.createMany(),
  userUpdateById: UserTC.mongooseResolvers.updateById(),
  userUpdateOne: UserTC.mongooseResolvers.updateOne(),
  userUpdateMany: UserTC.mongooseResolvers.updateMany(),
  userRemoveById: UserTC.mongooseResolvers.removeById(),
  userRemoveOne: UserTC.mongooseResolvers.removeOne(),
  userRemoveMany: UserTC.mongooseResolvers.removeMany(),
});

const graphqlSchema = schemaComposer.buildSchema();
export default graphqlSchema;
