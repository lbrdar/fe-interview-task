import React from 'react';
import {
  IPageInfo,
  ISearchRepositoriesVars
} from '../queries/searchRepositories';
import styled from 'styled-components';

const StyledContainer = styled.div`
  margin-top: 20px;
`;

const StyledButton = styled.button`
  font-size: 1em;
  padding: 8px 16px;
  outline: none;
  background-color: lightblue;
  cursor: pointer;
  border: none;
  box-shadow: 2px 2px 10px 2px rgba(0,0,0,0.3);
`;

interface IPaginationProps {
  pageInfo: IPageInfo;
  fetchMore: (opts: { variables: ISearchRepositoriesVars }) => void;
  variables: ISearchRepositoriesVars;
}

export function Pagination({ pageInfo, variables, fetchMore }: IPaginationProps): React.ReactElement {
  return (
      <StyledContainer>
        {pageInfo.hasNextPage && (
          <StyledButton onClick={() => fetchMore({
            variables: {
              ...variables,
              after: pageInfo.endCursor
            }
          })}>Load more</StyledButton>
        )}
      </StyledContainer>
  );
}
