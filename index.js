const { exec } = require('child_process');
const fs = require('fs');

const tagPrefix = `${process.env.INPUT_PREFIX || ''}*`;

exec(`git for-each-ref --sort=-creatordate --count 1 --format="%(refname:short)" "refs/tags/${tagPrefix}"`, {cwd: null}, (err, tag, stderr) => {
  tag = tag.trim();

  if (err) {
    console.log('Tag not found: ', stderr);
    process.exit(1);
  } else if (tag === "") {
    tag = process.env.INPUT_DEFAULT
  }

  fs.appendFileSync(process.env.GITHUB_OUTPUT, `version=${tag}\n`);
  process.exit(0);
});
