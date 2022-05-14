import React from "react";

import styles from "./index.module.css";

export class ErrorBoundary extends React.Component {
  // lifecycle hooks

  // componentDidMount() {

  // }

  // componentDidUpdate() {

  // }

  // componentWillUnmount() {

  // }

  constructor() {
    super();
    this.state = {
      error: null,
    };
  }

  componentDidCatch(error) {
    this.setState({ error });
  }

  // integration tests, e2e tests, unit tests
  // sentry, datadog, ...
  // snyk
  // CI (continues integration)/ CD (continues deployment/development) - Circle CI, Github Actions

  render() {
    return (
      <>
        {this.props.children}
        {this.state.error && (
          <div className={styles.errorElement}>
            {this.state.error.toString()}
          </div>
        )}
      </>
    );
  }
}
