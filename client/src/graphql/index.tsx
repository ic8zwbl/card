import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `ID` scalar type represents a unique MongoDB identifier in collection. MongoDB by default use 12-byte ObjectId value (https://docs.mongodb.com/manual/reference/bson-types/#objectid). But MongoDB also may accepts string or integer as correct values for _id field. */
  MongoID: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type CreateManyUserInput = {
  refered?: Maybe<Scalars['JSON']>;
  ip: Scalars['String'];
};

export type CreateManyUserPayload = {
  __typename?: 'CreateManyUserPayload';
  /** Documents IDs */
  recordIds: Array<Scalars['MongoID']>;
  /** Created documents */
  records?: Maybe<Array<User>>;
  /** Number of created documents */
  createdCount: Scalars['Int'];
  /**
   * Error that may occur during operation. If you request this field in GraphQL
   * query, you will receive typed error in payload; otherwise error will be
   * provided in root `errors` field of GraphQL response.
   */
  error?: Maybe<ErrorInterface>;
};

export type CreateOneUserInput = {
  refered?: Maybe<Scalars['JSON']>;
  ip: Scalars['String'];
};

export type CreateOneUserPayload = {
  __typename?: 'CreateOneUserPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Created document */
  record?: Maybe<User>;
  /**
   * Error that may occur during operation. If you request this field in GraphQL
   * query, you will receive typed error in payload; otherwise error will be
   * provided in root `errors` field of GraphQL response.
   */
  error?: Maybe<ErrorInterface>;
};

export type ErrorInterface = {
  /** Generic error message */
  message?: Maybe<Scalars['String']>;
};

export type FilterCountUser_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterCountUserInput = {
  refered?: Maybe<Scalars['JSON']>;
  ip?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterCountUserOperatorsInput>;
  OR?: Maybe<Array<FilterCountUserInput>>;
  AND?: Maybe<Array<FilterCountUserInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterCountUserOperatorsInput = {
  _id?: Maybe<FilterCountUser_IdOperatorsInput>;
};

export type FilterFindManyUser_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindManyUserInput = {
  refered?: Maybe<Scalars['JSON']>;
  ip?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyUserOperatorsInput>;
  OR?: Maybe<Array<FilterFindManyUserInput>>;
  AND?: Maybe<Array<FilterFindManyUserInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyUserOperatorsInput = {
  _id?: Maybe<FilterFindManyUser_IdOperatorsInput>;
};

export type FilterFindOneUser_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterFindOneUserInput = {
  refered?: Maybe<Scalars['JSON']>;
  ip?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneUserOperatorsInput>;
  OR?: Maybe<Array<FilterFindOneUserInput>>;
  AND?: Maybe<Array<FilterFindOneUserInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneUserOperatorsInput = {
  _id?: Maybe<FilterFindOneUser_IdOperatorsInput>;
};

export type FilterRemoveManyUser_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterRemoveManyUserInput = {
  refered?: Maybe<Scalars['JSON']>;
  ip?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterRemoveManyUserOperatorsInput>;
  OR?: Maybe<Array<FilterRemoveManyUserInput>>;
  AND?: Maybe<Array<FilterRemoveManyUserInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveManyUserOperatorsInput = {
  _id?: Maybe<FilterRemoveManyUser_IdOperatorsInput>;
};

export type FilterRemoveOneUser_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterRemoveOneUserInput = {
  refered?: Maybe<Scalars['JSON']>;
  ip?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterRemoveOneUserOperatorsInput>;
  OR?: Maybe<Array<FilterRemoveOneUserInput>>;
  AND?: Maybe<Array<FilterRemoveOneUserInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveOneUserOperatorsInput = {
  _id?: Maybe<FilterRemoveOneUser_IdOperatorsInput>;
};

export type FilterUpdateManyUser_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterUpdateManyUserInput = {
  refered?: Maybe<Scalars['JSON']>;
  ip?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterUpdateManyUserOperatorsInput>;
  OR?: Maybe<Array<FilterUpdateManyUserInput>>;
  AND?: Maybe<Array<FilterUpdateManyUserInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateManyUserOperatorsInput = {
  _id?: Maybe<FilterUpdateManyUser_IdOperatorsInput>;
};

export type FilterUpdateOneUser_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type FilterUpdateOneUserInput = {
  refered?: Maybe<Scalars['JSON']>;
  ip?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterUpdateOneUserOperatorsInput>;
  OR?: Maybe<Array<FilterUpdateOneUserInput>>;
  AND?: Maybe<Array<FilterUpdateOneUserInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateOneUserOperatorsInput = {
  _id?: Maybe<FilterUpdateOneUser_IdOperatorsInput>;
};


export type MongoError = ErrorInterface & {
  __typename?: 'MongoError';
  /** MongoDB error message */
  message?: Maybe<Scalars['String']>;
  /** MongoDB error code */
  code?: Maybe<Scalars['Int']>;
};


export type Mutation = {
  __typename?: 'Mutation';
  userHandle?: Maybe<UserHandleReturn>;
  /** Create one document with mongoose defaults, setters, hooks and validation */
  userCreateOne?: Maybe<CreateOneUserPayload>;
  /** Creates Many documents with mongoose defaults, setters, hooks and validation */
  userCreateMany?: Maybe<CreateManyUserPayload>;
  /**
   * Update one document: 1) Retrieve one document by findById. 2) Apply updates to
   * mongoose document. 3) Mongoose applies defaults, setters, hooks and
   * validation. 4) And save it.
   */
  userUpdateById?: Maybe<UpdateByIdUserPayload>;
  /**
   * Update one document: 1) Retrieve one document via findOne. 2) Apply updates to
   * mongoose document. 3) Mongoose applies defaults, setters, hooks and
   * validation. 4) And save it.
   */
  userUpdateOne?: Maybe<UpdateOneUserPayload>;
  /**
   * Update many documents without returning them: Use Query.update mongoose
   * method. Do not apply mongoose defaults, setters, hooks and validation. 
   */
  userUpdateMany?: Maybe<UpdateManyUserPayload>;
  /** Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document. */
  userRemoveById?: Maybe<RemoveByIdUserPayload>;
  /** Remove one document: 1) Remove with hooks via findOneAndRemove. 2) Return removed document. */
  userRemoveOne?: Maybe<RemoveOneUserPayload>;
  /**
   * Remove many documents without returning them: Use Query.remove mongoose
   * method. Do not apply mongoose defaults, setters, hooks and validation. 
   */
  userRemoveMany?: Maybe<RemoveManyUserPayload>;
};


export type MutationUserHandleArgs = {
  ip: Scalars['Float'];
  id?: Maybe<Scalars['MongoID']>;
  referedBy?: Maybe<Scalars['MongoID']>;
};


export type MutationUserCreateOneArgs = {
  record: CreateOneUserInput;
};


export type MutationUserCreateManyArgs = {
  records: Array<CreateManyUserInput>;
};


export type MutationUserUpdateByIdArgs = {
  _id: Scalars['MongoID'];
  record: UpdateByIdUserInput;
};


export type MutationUserUpdateOneArgs = {
  record: UpdateOneUserInput;
  filter?: Maybe<FilterUpdateOneUserInput>;
  sort?: Maybe<SortUpdateOneUserInput>;
  skip?: Maybe<Scalars['Int']>;
};


export type MutationUserUpdateManyArgs = {
  record: UpdateManyUserInput;
  filter?: Maybe<FilterUpdateManyUserInput>;
  sort?: Maybe<SortUpdateManyUserInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type MutationUserRemoveByIdArgs = {
  _id: Scalars['MongoID'];
};


export type MutationUserRemoveOneArgs = {
  filter?: Maybe<FilterRemoveOneUserInput>;
  sort?: Maybe<SortRemoveOneUserInput>;
};


export type MutationUserRemoveManyArgs = {
  filter: FilterRemoveManyUserInput;
  limit?: Maybe<Scalars['Int']>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
};

export type PaginationInfo = {
  __typename?: 'PaginationInfo';
  currentPage: Scalars['Int'];
  perPage: Scalars['Int'];
  pageCount?: Maybe<Scalars['Int']>;
  itemCount?: Maybe<Scalars['Int']>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPreviousPage?: Maybe<Scalars['Boolean']>;
};

export type Query = {
  __typename?: 'Query';
  userById?: Maybe<User>;
  userByIds: Array<User>;
  userOne?: Maybe<User>;
  userMany: Array<User>;
  userDataLoader?: Maybe<User>;
  userDataLoaderMany: Array<Maybe<User>>;
  userCount?: Maybe<Scalars['Int']>;
  userConnection?: Maybe<UserConnection>;
  userPagination?: Maybe<UserPagination>;
};


export type QueryUserByIdArgs = {
  _id: Scalars['MongoID'];
};


export type QueryUserByIdsArgs = {
  _ids: Array<Scalars['MongoID']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindByIdsUserInput>;
};


export type QueryUserOneArgs = {
  filter?: Maybe<FilterFindOneUserInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneUserInput>;
};


export type QueryUserManyArgs = {
  filter?: Maybe<FilterFindManyUserInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyUserInput>;
};


export type QueryUserDataLoaderArgs = {
  _id: Scalars['MongoID'];
};


export type QueryUserDataLoaderManyArgs = {
  _ids: Array<Scalars['MongoID']>;
};


export type QueryUserCountArgs = {
  filter?: Maybe<FilterCountUserInput>;
};


export type QueryUserConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<FilterFindManyUserInput>;
  sort?: Maybe<SortConnectionUserEnum>;
};


export type QueryUserPaginationArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  filter?: Maybe<FilterFindManyUserInput>;
  sort?: Maybe<SortFindManyUserInput>;
};

export type RemoveByIdUserPayload = {
  __typename?: 'RemoveByIdUserPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Removed document */
  record?: Maybe<User>;
  /**
   * Error that may occur during operation. If you request this field in GraphQL
   * query, you will receive typed error in payload; otherwise error will be
   * provided in root `errors` field of GraphQL response.
   */
  error?: Maybe<ErrorInterface>;
};

export type RemoveManyUserPayload = {
  __typename?: 'RemoveManyUserPayload';
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']>;
  /**
   * Error that may occur during operation. If you request this field in GraphQL
   * query, you will receive typed error in payload; otherwise error will be
   * provided in root `errors` field of GraphQL response.
   */
  error?: Maybe<ErrorInterface>;
};

export type RemoveOneUserPayload = {
  __typename?: 'RemoveOneUserPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Removed document */
  record?: Maybe<User>;
  /**
   * Error that may occur during operation. If you request this field in GraphQL
   * query, you will receive typed error in payload; otherwise error will be
   * provided in root `errors` field of GraphQL response.
   */
  error?: Maybe<ErrorInterface>;
};

export type RuntimeError = ErrorInterface & {
  __typename?: 'RuntimeError';
  /** Runtime error message */
  message?: Maybe<Scalars['String']>;
};

export enum SortConnectionUserEnum {
  IdDesc = '_ID_DESC',
  IdAsc = '_ID_ASC'
}

export enum SortFindByIdsUserInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindManyUserInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortFindOneUserInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortRemoveOneUserInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortUpdateManyUserInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export enum SortUpdateOneUserInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type UpdateByIdUserInput = {
  refered?: Maybe<Scalars['JSON']>;
  ip?: Maybe<Scalars['String']>;
};

export type UpdateByIdUserPayload = {
  __typename?: 'UpdateByIdUserPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Updated document */
  record?: Maybe<User>;
  /**
   * Error that may occur during operation. If you request this field in GraphQL
   * query, you will receive typed error in payload; otherwise error will be
   * provided in root `errors` field of GraphQL response.
   */
  error?: Maybe<ErrorInterface>;
};

export type UpdateManyUserInput = {
  refered?: Maybe<Scalars['JSON']>;
  ip?: Maybe<Scalars['String']>;
};

export type UpdateManyUserPayload = {
  __typename?: 'UpdateManyUserPayload';
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']>;
  /**
   * Error that may occur during operation. If you request this field in GraphQL
   * query, you will receive typed error in payload; otherwise error will be
   * provided in root `errors` field of GraphQL response.
   */
  error?: Maybe<ErrorInterface>;
};

export type UpdateOneUserInput = {
  refered?: Maybe<Scalars['JSON']>;
  ip?: Maybe<Scalars['String']>;
};

export type UpdateOneUserPayload = {
  __typename?: 'UpdateOneUserPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Updated document */
  record?: Maybe<User>;
  /**
   * Error that may occur during operation. If you request this field in GraphQL
   * query, you will receive typed error in payload; otherwise error will be
   * provided in root `errors` field of GraphQL response.
   */
  error?: Maybe<ErrorInterface>;
};

export type User = {
  __typename?: 'User';
  refered?: Maybe<Scalars['JSON']>;
  ip: Scalars['String'];
  _id: Scalars['MongoID'];
};

/** A connection to a list of items. */
export type UserConnection = {
  __typename?: 'UserConnection';
  /** Total object count. */
  count: Scalars['Int'];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Information to aid in pagination. */
  edges: Array<UserEdge>;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** The item at the end of the edge */
  node: User;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type UserHandleReturn = {
  __typename?: 'UserHandleReturn';
  user: Scalars['Float'];
};

/** List of items with pagination. */
export type UserPagination = {
  __typename?: 'UserPagination';
  /** Total object count. */
  count?: Maybe<Scalars['Int']>;
  /** Array of objects. */
  items?: Maybe<Array<User>>;
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo;
};

export type ValidationError = ErrorInterface & {
  __typename?: 'ValidationError';
  /** Combined error message from all validators */
  message?: Maybe<Scalars['String']>;
  /** List of validator errors */
  errors?: Maybe<Array<ValidatorError>>;
};

export type ValidatorError = {
  __typename?: 'ValidatorError';
  /** Validation error message */
  message?: Maybe<Scalars['String']>;
  /** Source of the validation error from the model path */
  path?: Maybe<Scalars['String']>;
  /** Field value which occurs the validation error */
  value?: Maybe<Scalars['JSON']>;
  /**
   * Input record idx in array which occurs the validation error. This `idx` is
   * useful for createMany operation. For singular operations it always be 0. For
   * *Many operations `idx` represents record index in array received from user.
   */
  idx: Scalars['Int'];
};

export type On_StartMutationVariables = Exact<{
  ip: Scalars['Float'];
  id?: Maybe<Scalars['MongoID']>;
  referedBy?: Maybe<Scalars['MongoID']>;
}>;


export type On_StartMutation = (
  { __typename?: 'Mutation' }
  & { userHandle?: Maybe<(
    { __typename?: 'UserHandleReturn' }
    & Pick<UserHandleReturn, 'user'>
  )> }
);


export const On_StartDocument = gql`
    mutation ON_START($ip: Float!, $id: MongoID, $referedBy: MongoID) {
  userHandle(ip: $ip, id: $id, referedBy: $referedBy) {
    user
  }
}
    `;
export type On_StartMutationFn = Apollo.MutationFunction<On_StartMutation, On_StartMutationVariables>;

/**
 * __useOn_StartMutation__
 *
 * To run a mutation, you first call `useOn_StartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useOn_StartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [onStartMutation, { data, loading, error }] = useOn_StartMutation({
 *   variables: {
 *      ip: // value for 'ip'
 *      id: // value for 'id'
 *      referedBy: // value for 'referedBy'
 *   },
 * });
 */
export function useOn_StartMutation(baseOptions?: Apollo.MutationHookOptions<On_StartMutation, On_StartMutationVariables>) {
        return Apollo.useMutation<On_StartMutation, On_StartMutationVariables>(On_StartDocument, baseOptions);
      }
export type On_StartMutationHookResult = ReturnType<typeof useOn_StartMutation>;
export type On_StartMutationResult = Apollo.MutationResult<On_StartMutation>;
export type On_StartMutationOptions = Apollo.BaseMutationOptions<On_StartMutation, On_StartMutationVariables>;