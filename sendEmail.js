function run(params) {
  return api.run("google_mail.send_message", {
    to: params.email,
    message: params.body,
    contentType: "text/html",
    subject: params.subject,
    userId: "me"
  });
}
