import React, { useContext, useState } from 'react';

// ---------- ViewStateContext ----------
type ViewState = { isEditing: boolean };
type ViewStateSetter = (viewState: ViewState) => void;

/** ViewStateContext contains ViewState and ViewStateSetter */
const ViewStateContext = React.createContext<
  { viewState: ViewState; setViewState: ViewStateSetter } | undefined
>(undefined);

// ---------- ViewStateContextProvider ----------
interface ViewStateContextProviderProps {
  children?: React.ReactNode;
}

function ViewStateContextProvider({ children }: ViewStateContextProviderProps) {
  console.log('ViewStateContextProvider.render');
  const [viewState, setViewState] = useState<ViewState>({
    isEditing: false,
  });

  const value = { viewState, setViewState };
  return (
    <ViewStateContext.Provider value={value}>
      {children}
    </ViewStateContext.Provider>
  );
}

// ---------- useViewStateContext ----------
function useViewStateContext() {
  const viewStateContext = useContext(ViewStateContext);
  /* istanbul ignore next */
  if (viewStateContext === undefined) {
    throw new Error(
      'useViewStateContext must be used within a ViewStateContextProvider'
    );
  }
  return viewStateContext;
}

export { ViewStateContextProvider, useViewStateContext };
