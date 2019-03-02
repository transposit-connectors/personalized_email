function run(params) {
  return api.run("google_mail.send_message", {
    to: params.email,
    messageHtml: params.body,
    subject: params.subject,
    userId: "me"
  });
}
