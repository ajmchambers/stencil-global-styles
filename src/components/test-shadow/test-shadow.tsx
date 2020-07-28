import { Component, h } from '@stencil/core';

@Component({
  tag: 'test-shadow',
  shadow: true
})
export class TestShadow {
  render() {
    return (
      <blockquote>
        shadow: true
      </blockquote>
    );
  }
}
