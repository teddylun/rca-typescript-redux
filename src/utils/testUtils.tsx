import { Provider } from 'react-redux';
import { render as rtlRender } from '@testing-library/react';
import { default as realStore } from '../store/store';
import { PreloadedState } from 'redux';
import React from 'react';

function render(
  ui: React.ReactElement,
  {
    initialState = {},
    store = realStore(initialState as unknown as PreloadedState<undefined>),
    ...renderOptions
  }
) {
  function Wrapper({ children }: { children: JSX.Element }): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }

  // Return an object with the store and all of RTL's query functions
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react';
export { render };
