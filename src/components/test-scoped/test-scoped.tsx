import { Component, h } from '@stencil/core';

@Component({
  tag: 'test-scoped',
  scoped: true
})
export class TestScoped {
  render() {
    return (
      <blockquote>
        scoped: true
      </blockquote>
    );
  }
}
