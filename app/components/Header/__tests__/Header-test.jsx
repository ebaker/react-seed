import React from 'react/addons';
import Header from '../Header.jsx';
import { expect } from 'chai';

let { TestUtils } = React.addons;

describe('Header', () => {
  it('Should have the correct footer element', () => {
    let footer = TestUtils.renderIntoDocument(
      <Header />
    );
    let headerElem = React.findDOMNode(footer);
    expect(headerElem ooterElem.tagName.toLowerCase()).to.equal('header');
  });
});
