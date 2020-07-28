import { Component, h } from '@stencil/core';

@Component({
  tag: 'test-none',
  shadow: false,
  scoped: false
})
export class TestNone {
  render() {
    return (
      <blockquote>
        shadow: false, scoped: false
      </blockquote>
    );
  }
}
