
/*
* Auto generated Codehooks (c) example
* Install: npm i codehooks-js codehooks-crudlify
*/
import {app} from 'codehooks-js'
import { object, string, date } from 'yup';
import {crudlify} from 'codehooks-crudlify'

// used this site as a reference: https://www.npmjs.com/package/codehooks-crudlify
// database schemas
const todoItemSchema = object({
  user: string().required(),
  description: string().required(),
  category: string().optional(),
  doneStatus: boolean().required().default(() => false),
  createdOn: date().default(() => new Date()),
});

const todoCategoriesSchema = object({
  user: string().required(),
  categories: array().of(string()).default([]),
});

// test route for https://<PROJECTID>.api.codehooks.io/dev/
app.get('/', (req, res) => {
  res.send('CRUD server ready')
})

// Use Crudlify to create a REST API for any collection
crudlify(app, { todoItem: todoItemSchema, todoCategories: todoCategoriesSchema });

// bind to serverless runtime
export default app.init();
