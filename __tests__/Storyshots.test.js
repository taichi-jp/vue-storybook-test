const path = require('path');
const initStoryshots = require('@storybook/addon-storyshots').default;

initStoryshots({
    framework: 'vue',
    configPath: path.join(__dirname, '.storybook'),
    integrityOptions: { cwd: path.join(__dirname, 'src', 'stories') },
});