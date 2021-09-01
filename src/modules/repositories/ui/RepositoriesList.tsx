import React from 'react';
import { useQuery } from '@apollo/client';
import {
  IRepository,
  ISearchRepositoriesData,
  ISearchRepositoriesVars,
  SEARCH_REPOSITORIES
} from '../queries/searchRepositories';

interface IRepositoriesListProps {
  searchQuery: string;
}

export function RepositoriesList({ searchQuery }: IRepositoriesListProps): React.ReactElement | null {
  const { loading, error, data } = useQuery<ISearchRepositoriesData, ISearchRepositoriesVars>(SEARCH_REPOSITORIES, {
    variables: {
      query: searchQuery,
      first: 10
    }
  });

  if (loading) {
    return (
      <p>... Loading ...</p>
    )
  }

  if (error) {
    return (
      <div>
        <p>An error occurred while trying to fetch data:</p>
        <p>{error.message}</p>
      </div>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <ul>
      {data.search.nodes.map((repo: IRepository) => (
          <p key={repo.id}>
            <a href={repo.url} target="_blank" rel="noreferrer">{repo.nameWithOwner}</a> - 🌟 {repo.stargazerCount} - 🍴 {repo.forkCount}
          </p>
        ))}
    </ul>
  );
}
