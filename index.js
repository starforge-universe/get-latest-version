const core = require('@actions/core');

const inputDefault = core.getInput('default')
console.log(`Input: ${inputDefault}`);
