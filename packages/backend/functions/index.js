const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
admin.firestore().settings({timestampInSnapshots: true});
const cors = require('cors')({origin: true});

const Mailchimp = require('mailchimp-api-v3');
const mailchimp = new Mailchimp('69f2fd132d7d74d91a0043c63cfa2427-us4');

// exports.addUserToList = functions.firestore.document('subscribers/{pushId}').onWrite(async (change, context) => {
//   const { email, firstName } = change.after.data();
//   let res = await mailchimp.post('/lists/60554224b6/members', {
//     email_address: email,
//     status: 'subscribed',
//     merge_fields: {
//       FNAME: firstName
//     }
//   })
//   .then((results) => {
//     console.log('successully added a new firebase user', email,' ', firstName, 'to Mailchimp list', results);
//     return {status: results.statusCode, message: "User has been added successfully." };
//   })
//   .catch((err) => {
//     console.log('Mailchimp: Error while attempting to add the user', err);
//     return {status: err.status, message: "Error while attempting to add the user"};
//   })
//})

exports.addSubscriber = functions.https.onRequest((req,res) => {
  cors(req, res, async () => {
    const data = JSON.parse(req.body);
    const result = await mailchimp.post('/lists/60554224b6/members', {
      email_address: data.email,
      status: 'subscribed',
      merge_fields: {
        FNAME: data.firstName
      }
    })
    .then((results) => {
      console.log('successfully added a new firebase user');
      return res.status(200).json({status: "200", message: "Successfully added a new user"});
    })
    .catch((err) => {
      console.log('Mailchimp: Error while attempting to add the user', err);
      return res.status(500).json({status: "500", message: "Error while attempting to add the user"});
    })
  });
});