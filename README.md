# React Sticky Spy

Super minimal `400 byte` css-free react component that detect and add a custom attribute to a `position: sticky` element when it is stuck inside the scrolling container.

## Installation

Install the package with your favourite package manager:

```sh
npm i react-stycky-spy
# or
pnpm i react-stycky-spy
# or
yarn add react-stycky-spy
```

## Usage

Import the component and wrap your sticky element. This component doesn't add any wrapper so your markup and style is safe (well, it adds just a empty spy element before but...Hey 👉😎👉, it's free)

```tsx
import { StickySpy } from 'react-sticky-spy'

const MyPage = () => (
  <div style={{ overflow: 'auto' }}>
    <StickySpy>
      <h1 style={{ position: 'sticky', top: 0 }}>Position sticky title</h1>
    </StickySpy>
    ...
  <div>
)
```

```css
h1[data-react-is-sticky="true"] {
  border-bottom: 1px solid gray;
}
```

> **Warning**
> The `CSS` for the sticky position is not included. Add your own style to the wrapped element.

## API Reference

```ts
export type StickySpyProps = PropsWithChildren<{
  /**
   * Set a custom name for the attribute
   * @default "data-react-is-sticky"
   */
  attribute?: string;
  /**
   * Callback function that is called when the sticky element changes
   * @param isSticky Current state of the sticky element
   */
  onStickyChange?: (isSticky: boolean) => void;
}>
```
