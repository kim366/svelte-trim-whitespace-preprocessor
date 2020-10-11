# svelte-trim-whitespace-preprocessor
Trim whitespace between inline elements in Svelte components

Install via

```bash
npm i -D svelte-trim-whitespace-preprocessor
```

Then, wherever you preprocess Svelte components, add the imported object. Here is an example with the Rollup config:

```js

import trimWhitespacePreprocessor from 'svelte-trim-whitespace-preprocessor';

export default {
	client: {
    // ...
    plugins: [
      svelte({
			  // ...
        preprocess: trimWhitespacePreprocessor
      })
		]	
  },
  server: {
    // ...
    plugins: [
      svelte({
			  // ...
        preprocess: trimWhitespacePreprocessor
      })
		]	
  }
}
```

Here it is in code:

```js
svelte.preprocess(content, trimWhitespacePreprocessor, {filename});
```
