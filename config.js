const path = require("path");
let root = path.join(__dirname);

let dirs = {
  d: "docs",
  t: "templates",
  o: "output"
};

let config = {
  directory: root,
  files: [
    {
      type: "file",
      dest: `${root}/${dirs.o}/${dirs.d}/README.md`,
      content: "#README"
    },
    {
      type: "symlink",
      dest: `${root}/${dirs.o}/symlinked-config.js`,
      content: {
        original: `${root}/config.js`
      }
    },
    {
      type: "template",
      dest: `${root}/${dirs.o}/comp.js`,
      content: {
        original: `${root}/${dirs.t}/sample.template.js`,
        variables: { component: "Foobar" }
      }
    }
  ]
};

module.exports = {
  config
};
