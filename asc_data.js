const server = '';
const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

export default {
  asyncData ({ params, error }) {
    return axios.get(server)
      .then((res) => {
        return { title: res.data.title }
      })
      .catch((e) => {
        error({ statusCode: 404, message: 'Post not found' })
      })
  }
}

exports.getBacotan = functions.https.onRequest((req, res) => {
    admin.firestore().collection('bacot').get().then(data => {
        let bacotan = [];
        data.forEach(doc => {
            bacotan.push(doc.data());
        });
        return res.json(bacotan);
    }).catch(err => console.error(err));
})

server.run();
