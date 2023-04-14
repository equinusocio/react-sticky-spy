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
  <StickySpy>
    <h1>Position sticky title</h1>
    ...
  </StickySpy>
)
```

## API References

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
