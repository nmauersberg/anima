#### Basic usage

```tsx
import { FadeIn, getIncrementor } from 'anima-react';

// return an incremented number on every call
const getDelay = getIncrementor(0, 0.15);

// Wrap your component and add an optional delay
<FadeIn orientation="up" delay={getDelay()}>
  <YourReactComponent />
</FadeIn>;
```

#### Components

**FadeIn**
| name        | type                       | default |
|-------------|----------------------------|---------|
| delay       | number                     | 0       |
| orientation | `left` `right` `up` `down` | `left`  |

#### Develop

```
yarn install
yarn start
```
