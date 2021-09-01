import { gql } from '@apollo/client';

export interface IRepository {
  id: string;
  nameWithOwner: string;
  url: string;
  stargazerCount: number;
  forkCount: number;
}

export interface IPageInfo {
  endCursor: string;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string;
}

export interface IEdge<T> {
  node: T;
}

export interface IConnection<T> {
  edges: IEdge<T>[];
  pageInfo: IPageInfo;
}

export interface ISearchRepositoriesData {
  search: IConnection<IRepository>;
}

export interface ISearchRepositoriesVars {
  after?: string;
  before?: string;
  query: string;
  first: number;
}

export const SEARCH_REPOSITORIES = gql`
  query searchRepositories(
    $query: String!
    $first: Int!
    $before: String
    $after: String
  ) {
    search(
      query: $query
      type: REPOSITORY
      first: $first
      before: $before
      after: $after
    ) {
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      edges {
        node {
          ... on Repository {
            id
            nameWithOwner
            url
            stargazerCount
            forkCount
          }
        }
      }
    }
  }
`;
