import React from 'react';
import Spinner from '../spinner';

interface fetchWrapperProps {
  states: {
    loading: boolean;
    error: boolean;
    success?: boolean;
  };
  succesComponent: React.ReactNode;
  loadingComponent?: React.ReactNode;
  errorComponent?: React.ReactNode;
}

function FetchWrapper({
  states,
  succesComponent,
  loadingComponent = null,
  errorComponent = null,
}: fetchWrapperProps) {
  const { error, loading, success } = states;

  if (loading) {
    return (
      <>
        {loadingComponent || (
          <div className="w-full h-full flex justify-center items-center">
            <Spinner />
          </div>
        )}
      </>
    );
  }

  if (error) {
    return (
      <>
        {errorComponent || (
          <div className="w-full h-full flex justify-center items-center">
            Error loading data
          </div>
        )}
      </>
    );
  }

  if ( !loading && !error) {
    return <>{succesComponent || null}</>;
  }

  return null;
}

export default FetchWrapper;
