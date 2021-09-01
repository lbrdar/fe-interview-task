import { gql } from '@apollo/client';

export interface IRepository {
    id: string;
    nameWithOwner: string;
    url: string;
    stargazerCount: number;
    forkCount: number;
}

export interface ISearchRepositoriesData {
    search: { nodes: IRepository[] };
}

export interface ISearchRepositoriesVars {
    query: string;
    first: number;
}

export const SEARCH_REPOSITORIES = gql`
    query searchRepositories($query: String!, $first: Int!) {
        search(query: $query, type: REPOSITORY, first: $first) {
            nodes {
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
`
