const express = require('express')
const app = express()

// #############################################################################
// This configures static hosting for files in /public that have the extensions
// listed in the array.
// var options = {
//   dotfiles: 'ignore',
//   etag: false,
//   extensions: ['htm', 'html','css','js','ico','jpg','jpeg','png','svg'],
//   index: ['index.html'],
//   maxAge: '1m',
//   redirect: false
// }
// app.use(express.static('public', options))

// #############################################################################
// Catch all handler for all other request.
app.use('*', (req,res) => {
  res.writeHead('307','Redirect Temporary', {
    'Location': `mailto:kam.lasater@cyclic.sh?&subject=Hello Kam&body=I'm interested in Cyclic.`
  }).end()
})

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`index.js listening at http://localhost:${port}`)
})
