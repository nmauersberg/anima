# anima-react

### An animation wrapper component library for react

### Installation

```bash
yarn add anima-react

# OR:

npm install anima-react
```

### Basic usage

```tsx
import { FadeIn, getIncrementor } from 'anima-react';

// return an incremented number on every call
const getDelay = getIncrementor(0, 0.15);

// Wrap your component and add an optional delay
<FadeIn orientation="up" delay={getDelay()}>
  <YourReactComponent />
</FadeIn>;
```

---

### Components

#### **FadeIn**

| name        | type                              | default |
| ----------- | --------------------------------- | ------- |
| delay       | number                            | 0       |
| orientation | `left` `right` `up` `down` `none` | `left`  |
| distance    | number                            | 10      |
| duration    | number                            | 0.2     |

### **ZoomIn**

| name        | type                              | default |
| ----------- | --------------------------------- | ------- |
| delay       | number                            | 0       |
| orientation | `left` `right` `up` `down` `none` | `none`  |
| distance    | number                            | 100     |
| duration    | number                            | 0.2     |

---

### Develop

```
yarn install
yarn dev
```
