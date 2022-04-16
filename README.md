# React Context Playground

A simple app to show how React Context can be optimized to render only the
components that are consuming the context. The basic technique is to return the
same element reference from the context provider component as it did the last
time. This will make React skip re-rendering of that particular child. Here's
the [relevant code](src/contexts/ViewStateContext.tsx#L17-L29):

```tsx
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
```

You can read more about this technique in [Mark Erikson's article]
(https://blog.isquaredsoftware.com/2020/05/blogged-answers-a-mostly-complete-guide-to-react-rendering-behavior/#component-render-optimization-techniques).

![screenshot](assets/screenshot.png)

## Development Build

```bash
npm install
npm run dev
```

Point your browser to http://localhost:3000.

## Production Build

```bash
npm install
npm run build
```
