// const express = require('express');
// const fs = require('fs');
// const users = require('./MOCK_DATA.json');

// const app = express();
// const PORT = 8000;


// app.use(express.urlencoded({extended: false}))


// app.get('/users',(req, res)=>{
//     const html = `
//     <ul>
//     ${users.map((user) => `<li>${user.first_name}</li>`).join('')}
//     </ul>
//     `;
//     res.send(html)
// })





// app.route('/api/users/:id').get((req,res)=>{
//     const id = Number(req.params.id);
//     const user = users.find((user) => user.id === id);
//     return res.json(user);
// }).put((req,res)=>{
//     const id = Number(req.params.id);
//     return res.send({status:"pending"});
// }).delete((req,res)=>{
//     const id = Number(req.params.id);
//     return res.send({status:"pending"});
// });


// //Rest API
// app.get('/api/users',(req, res)=>{
 
// })



// app.get('/api/users/:id',(req,res)=>{
//   const id = Number(req.params.id);
//   const user = users.find((user) => user.id === id);
//   return res.json(user);
// });



// app.post('/api/users',(req,res)=>{
//      users.push({...body, id: users.length + 1});
//     fs.writeFile('MOCK_DATA.json',JSON.stringify(users),(err, data)=>{
//         return res.json({status:"success", message:"User added successfully"});
//     });
// });


// app.patch('/api/users/:id',(req,res)=>{
//     const id = Number(req.params.id);
//     return res.send({status:"pending"});
// });


// app.delete('/api/users/:id',(req,res)=>{
//     const id = Number(req.params.id);
//     return res.send({status:"pending"});
// });





// app.listen(PORT,()=>{
//     console.log(`Server is running on ${PORT} PORT`);
// })







const express = require('express');
const fs = require('fs');
const users = require('./MOCK_DATA.json');

const app = express();
const PORT = 8000;

// Middleware to parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve HTML list of users
app.get('/users', (req, res) => {
  const html = `
    <ul>
      ${users.map((user) => `<li>${user.first_name}</li>`).join('')}
    </ul>
  `;
  res.send(html);
});

// REST API routes
app.get('/api/users', (req, res) => {
  return res.json(users);
});

app.route('/api/users/:id')
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    if (!user) return res.status(404).json({ message: "User not found" });
    return res.json(user);
  })
  .put((req, res) => {
    return res.send({ status: "pending" });
  })
  .delete((req, res) => {
    return res.send({ status: "pending" });
  });

// Create new user
app.post('/api/users', (req, res) => {
  const body = req.body;
  if (!body.first_name || !body.last_name || !body.email) {
    return res.status(400).json({ status: "error", message: "Missing fields" });
  }

  users.push({ ...body, id: users.length + 1 });
  fs.writeFile('./MOCK_DATA.json', JSON.stringify(users, null, 2), (err) => {
    if (err) {
      return res.status(500).json({ status: "error", message: "Failed to write file" });
    }
    return res.json({ status: "success", message: "User added successfully" });
  });
});

// PATCH route placeholder
app.patch('/api/users/:id', (req, res) => {
  return res.send({ status: "pending" });
});

// DELETE route placeholder
app.delete('/api/users/:id', (req, res) => {
  return res.send({ status: "pending" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT} PORT`);
});
