import React from 'react';
import Assessment from '../components/Assessment';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../store';


test('Assessment is saying hello', () => {
  const component = renderer.create(
    <Provider store={store}>
      <Assessment />
    </Provider>
  );

  let tree = component.toJSON();
  console.log(tree);

})
