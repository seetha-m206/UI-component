import { Component, type ErrorInfo, type ReactNode } from 'react';
import styles from './PreviewBoundary.module.css';

interface Props {
  children: ReactNode;
  componentName: string;
  exampleTitle: string;
}

interface State {
  hasError: boolean;
}

export class PreviewBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error(
      `[Preview] "${this.props.componentName}" example "${this.props.exampleTitle}" failed to render:`,
      error,
      info
    );
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.fallback} role="alert">
          <span className={styles.fallbackTitle}>Preview failed to load</span>
          <p className={styles.fallbackDetail}>
            This example could not be rendered. See the browser console for details.
          </p>
        </div>
      );
    }
    return this.props.children;
  }
}
