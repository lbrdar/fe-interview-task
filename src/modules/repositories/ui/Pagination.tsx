import React from 'react';
import {
  IPageInfo,
  ISearchRepositoriesData,
  ISearchRepositoriesVars
} from '../queries/searchRepositories';
import { ObservableQueryFields } from '@apollo/client/react/types/types';

interface IPaginationProps {
  pageInfo: IPageInfo;
  fetchMore: ObservableQueryFields<ISearchRepositoriesData, ISearchRepositoriesVars>['fetchMore'];
  variables: ISearchRepositoriesVars;
}

export function Pagination({ pageInfo, variables, fetchMore }: IPaginationProps): React.ReactElement {
  return (
      <div>
        {pageInfo.hasNextPage && (
          <button onClick={() => fetchMore({
            variables: {
              ...variables,
              after: pageInfo.endCursor
            }
          })}>Load more</button>
        )}
      </div>
  );
}
