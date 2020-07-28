import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  shadow: false,
  scoped: false
})
export class AppRoot {

  render() {
    return (
      <div>
        <test-none />
        <test-shadow />
        <test-scoped />
      </div>
    );
  }
}
