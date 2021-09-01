import React from 'react';
import { useQuery } from '@apollo/client';
import {
  ISearchRepositoriesData,
  ISearchRepositoriesVars,
  SEARCH_REPOSITORIES,
} from '../queries/searchRepositories';
import { Loading } from './Loading';
import { ErrorMessage } from './ErrorMessage';
import { RepositoriesListItem } from './RepositoriesListItem';
import { Pagination } from './Pagination';

interface IRepositoriesListProps {
  searchQuery: string;
}

export function RepositoriesList({
  searchQuery,
}: IRepositoriesListProps): React.ReactElement | null {
  const { loading, error, data, fetchMore, variables } = useQuery<
    ISearchRepositoriesData,
    ISearchRepositoriesVars
  >(SEARCH_REPOSITORIES, {
    variables: {
      query: searchQuery,
      first: 15,
    },
  });

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage error={error} />;
  }

  if (!data) {
    return null;
  }

  const { edges, pageInfo } = data.search;

  return (
    <ul>
      {edges.map(({ node: repo }) => (
        <RepositoriesListItem key={repo.id} repository={repo} />
      ))}
      <Pagination
        pageInfo={pageInfo}
        fetchMore={fetchMore}
        variables={variables!}
      />
    </ul>
  );
}
