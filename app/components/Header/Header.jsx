import styles from './_Header.scss';
import React from 'react';

export default class Header extends React.Component {
  render() {
    var year = (new Date()).getFullYear();
    return (
      <header className={styles.footer}>
        &copy; Your Company&nbsp;{year}
      </header>
    );
  }
}
