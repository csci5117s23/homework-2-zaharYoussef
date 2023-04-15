
/*
* Auto generated Codehooks (c) example
* Install: npm i codehooks-js codehooks-crudlify
*/
import {app} from 'codehooks-js'
import { object, string, date, boolean, array, number } from 'yup';
import {crudlify} from 'codehooks-crudlify'
import jwtDecode from 'jwt-decode';


// used this site as a reference: https://www.npmjs.com/package/codehooks-crudlify
// Also used Tech-Stack-2-Kluver-Demo as an example 
// database schemas
const taskSchema = object({
  user: string().required(),
  description: string().required(),
  category: string().optional(),
  doneStatus: boolean().required().default(() => false),
  createdOn: date().default(() => new Date()),
});

const taskCategoriesSchema = object({
  user: string().required(),
  category: string().required(),
});

// This can largely be copy-pasted, it just grabs the authorization token and parses it, stashing it on the request.
const userAuth = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (authorization) {
      const token = authorization.replace('Bearer ','');
      // NOTE this doesn't validate, but we don't need it to. codehooks is doing that for us.
      const token_parsed = jwtDecode(token);
      req.user_token = token_parsed;
    }
    next();
  } catch (error) {
    next(error);
  } 
}
app.use(userAuth)

// app.use('/categories', (req, res, next) => {
//   if (req.method === "POST") {
//       req.body.userId = req.user_token.sub
//   } else if (req.method === "GET") {
//       // on "index" -- always check for authentication.
//       req.query.userId = req.user_token.sub
//   }
//   next();
// })


app.get('/', (req, res) => {
  res.send('say what')
})

// Use Crudlify to create a REST API for any collection
crudlify(app, { tasks: taskSchema, taskCategories: taskCategoriesSchema });

// bind to serverless runtime
export default app.init();
