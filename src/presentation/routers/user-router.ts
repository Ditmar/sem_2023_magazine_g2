import express from 'express';
import HttpStateCodes from '../../utils/http-state-codes';
import NoSQLWrapper from '../../data/interfaces/data-sources/no-sql-wrapper';
const UserRouter = (db: NoSQLWrapper) => {
    // routing
    const router = express.Router();
    router.get('/user', async(request, response) => {
        const resultDbList = await db.FindAllUsers();
        response.status(HttpStateCodes.OK).json({response: resultDbList});
    });
    router.post('/user', async(request, response) => {
        const user = request.body;
        const resultDb = await db.CreateUser(user);
        response.status(HttpStateCodes.OK).json({response: resultDb});
    })
    return router;
}
export default UserRouter;