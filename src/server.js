import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import express from 'express'


const app = express();

const AdminJS = new AdminJS({
    database: [],
    rootPath: '/admin',
    resources: []
});

const router = AdminJSExpress.buildRouter(AdminJS)

app.use(AdminJS.options.rootPath, router)
app.listen(5000, () => {
    console.log("AdminJS is under http://localhost:5000/admin");
});
