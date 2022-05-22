const AdminJS = require('adminjs');
const AdminJSExpress = require('@adminjs/express');

const express = require('express');


const app = express();

const Admin = new AdminJS({
    database: [],
    rootPath: '/admin',
    resources: [],
});

const router = AdminJSExpress.buildRouter(Admin);

app.use(Admin.options.rootPath, router)
app.listen(5000, () => {
    console.log("AdminJS is under http://localhost:5000/admin");
});
