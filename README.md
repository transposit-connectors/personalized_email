# Personalized Email Sender

In day-to-day operations at Transposit, we run into a problem that many people experience on a regular basis: the need to send consistent but customized emails to a number of recipients.

There are plenty of tools out there to help send bulk email, but in many cases you want the opportunity to preview and personalize the email before sending. 

There are a few problems with our workaround solutions previously:
  
  * Automated solutions can lead to embarrassing errors. (I once had a recruiting email use a scraped version of the candidate’s name in all caps.)
  * Personalized content adds a human touch. Even though we may want consistency when it comes to process or message, it is nice to add personalized context to ground the email.
  * Copy/paste often leads to formatting errors that make the message content feel less engaging.

We'd created a few of these email templating apps for internal use, including  for user outreach and recruiting. So we decided to create a generic email application that allows you to pass through some input fields to a custom template, preview the email, and send.

Let’s start by visiting the hosted app page:

[https://personalized-email-j8a18.transposit.io](https://personalized-email-j8a18.transposit.io)

Once you log in, you will be prompted for credentials for the Google account that you want to send the email from.

Our sample email application allows you to pass through a name and email address. Try previewing and editing the email. Once you are happy with it, you can send the email.

Next, we'll dig in to forking and customizing.

## Take a look around

 * View the sample app
 * Add your own keys
 * Run the preview operation

## Edit the template

  * Fork the application
  * Edit the Mustache template in the preview operation's code
  * Commit your changes
  * View the hosted app again to see the changes

## Change the parameters

  * Add the new parameters to the preview operation
  * Commit your changes
  * Add new form elements to the hosted app
  * Edit the `extractParams` function
  * Preview the new template with parameters
