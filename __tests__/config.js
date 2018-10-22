import { configure } from '@storybook/vue';

// automatically import all files ending in *.stories.js
// const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  require('../stories/index.stories');
}

configure(loadStories, module);
