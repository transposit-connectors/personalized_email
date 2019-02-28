function run(params) {
  let mustache = require('mustache.js');
  let view = {
    name: params.name
  };
  let subjectTemplate = "A message for {{name}}";
  let bodyTemplate = "Hi {{name}},<br/><br/>Thanks for checking out my email template application!<br/><br/>The Transposit Team";
  return {
    "subject": mustache.render(subjectTemplate, view),
    "body": mustache.render(bodyTemplate, view)
  };
}