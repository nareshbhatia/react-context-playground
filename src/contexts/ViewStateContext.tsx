import * as React from 'react';

// ---------- ViewState ----------
interface ViewState {
  isEditing: boolean;
}

// ---------- ViewStateContext ----------
// contains ViewState and ViewStateSetter

type ViewStateSetter = (viewState: ViewState) => void;

const ViewStateContext = React.createContext<
  { viewState: ViewState; setViewState: ViewStateSetter } | undefined
>(undefined);

// ---------- ViewStateContextProvider ----------
interface ViewStateContextProviderProps {
  children?: React.ReactNode;
}

function ViewStateContextProvider({ children }: ViewStateContextProviderProps) {
  console.log('ViewStateContextProvider.render');
  const [viewState, setViewState] = React.useState<ViewState>({
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
  const viewStateContext = React.useContext(ViewStateContext);
  /* istanbul ignore next */
  if (viewStateContext === undefined) {
    throw new Error(
      'useViewStateContext must be used within a ViewStateContextProvider'
    );
  }
  return viewStateContext;
}

export { ViewStateContextProvider, useViewStateContext };
