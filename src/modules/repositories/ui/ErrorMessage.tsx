import React from 'react';
import { ApolloError } from '@apollo/client';


interface IErrorMessageProps {
  error: ApolloError;
}

function ErrorMessageBase({ error }: IErrorMessageProps): React.ReactElement {
   return (
      <div>
        <p>An error occurred while trying to fetch data:</p>
        <p>{error.message}</p>
      </div>
    );
}

export const ErrorMessage = React.memo(ErrorMessageBase);
