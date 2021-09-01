import React from 'react';
import { IRepository } from '../queries/searchRepositories';

interface IRepositoriesListItemProps {
  repository: IRepository;
}

function RepositoriesListItemBase({ repository }: IRepositoriesListItemProps): React.ReactElement {
  const { url, nameWithOwner, stargazerCount, forkCount } = repository;

  return (
    <li>
      <a href={url} target="_blank" rel="noreferrer">{nameWithOwner} </a>
      - 🌟 {stargazerCount} - 🍴 {forkCount}
    </li>
  );
}

export const RepositoriesListItem = React.memo(RepositoriesListItemBase);
