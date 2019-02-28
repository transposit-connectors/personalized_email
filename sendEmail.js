function run(params) {
  return api.run("this.send_html_email", {
    to: params.email,
    messageHtml: params.body,
    subject: params.subject
  });
}
