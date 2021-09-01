import React from 'react';
import { IRepository } from '../queries/searchRepositories';
import styled from 'styled-components';

const StyledListItem = styled.li`
  list-style-type: none;
  line-height: 2em;
`;

const StyledLink = styled.a`
  font-size: 1.25em;
  color: black;
  text-decoration: none;
  
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

interface IRepositoriesListItemProps {
  repository: IRepository;
}

function RepositoriesListItemBase({ repository }: IRepositoriesListItemProps): React.ReactElement {
  const { url, nameWithOwner, stargazerCount, forkCount } = repository;

  return (
    <StyledListItem>
      <StyledLink href={url} target="_blank" rel="noreferrer">{nameWithOwner} </StyledLink>
      - 🌟 {stargazerCount} - 🍴 {forkCount}
    </StyledListItem>
  );
}

export const RepositoriesListItem = React.memo(RepositoriesListItemBase);
