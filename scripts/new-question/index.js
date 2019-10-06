const { readdirSync, mkdir, copyFile } = require('fs');
const path = require('path');

function getDirectories(path) {
  return readdirSync(path, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
}

function init() {
  const agrs = process.argv.slice(2);
  console.log(agrs);

  if (!agrs.length) {
    throw new Error('Please, specify question title');
  }

  const questionName = agrs[0];
  const srcDir = `${path.dirname(require.main.filename)}/../../content/questions`;
  const existingQuestions = getDirectories(srcDir);

  if (existingQuestions.indexOf(questionName) > -1) {
    throw new Error(`Question ${questionName} already exists. Please, specify another name`);
  }

  mkdir(`${srcDir}/${questionName}`, {}, (err) => {
    if (err) throw err;
  });

  copyFile(
    `${path.dirname(require.main.filename)}/index.md`,
    `${srcDir}/${questionName}/index.md`,
    (err) => {
      if (err) throw err;
    }
  );

  console.info('All done!');
}

try {
  init();
} catch (e) {
  console.error(e.message);
  process.exit(-1);
}

process.exit(0);