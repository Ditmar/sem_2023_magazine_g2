import server from './server'
import UserRouter from './presentation/routers/user-router';
import NoSQLWrapper from './data/interfaces/data-sources/no-sql-wrapper';
import { Response } from 'express';
import ArticleRouter from './presentation/routers/user-router';
import { MongoClient, ObjectId } from 'mongodb';
import mockData from './__mock__/data';

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
//mongo
const getMongoDBClient = async (): Promise<NoSQLWrapper> => {
    //mongodb://admin:password@localhost:27017/db
    const stringConnection = `mongodb://${process.env.API_MONGO_USERNAME}:${process.env.API_MONGO_PASSWORD}@localhost:27017`
    const uri = stringConnection;
    const client = new MongoClient(uri);

    client.connect();
    const database = process.env.API_MONGO_DBNAME;
    
    const db = client.db(database);
    const CreateUser = async (user: any): Promise<any> => {
        const result = await db.collection('users').insertOne(user);
        console.log(`New user created with the following id: ${result.insertedId}`);
        return {
            acknowledged: result.acknowledged,
            insertedId: result.insertedId,
        };
    }
    const FindAllUsers = async (): Promise<any[]> => {
        const result = await db.collection('users').find({}).toArray();
        return result;
    }

    //artitles
    const FindAllArticles = async (): Promise<any[]> => {
        const result = await db.collection('articles').find({}).toArray();
        return mockData;
      };

    const DeleteUsers = async(id:string): Promise<any> => {
        const objID = new ObjectId(id);
        const result = await db.collection('users').findOneAndDelete({_id :objID});

        return result;
    }
    const UpdateUsers = async(id:any,data:any): Promise<any> => {
        const objID = new ObjectId(id);
        const updateData = data;

        const result = await db.collection('users').replaceOne({_id :objID}, updateData);
        return result;
    }
    return {
        CreateUser,
        FindAllUsers,   
        DeleteUsers,
        UpdateUsers,
        FindAllArticles,
    }
}

// const getPgDBClient = () => {

// }
// //todo homework
// const getSqlServerClient = () => {

// }

(async() => {
    const db = await getMongoDBClient();
    server.use('/api', UserRouter(db));
    server.use('/api', ArticleRouter(db));
    const port = process.env.API_PORT || 3000;
    server.listen(port, () => {
        console.log(`Server is listening on port ${port}`);
    });
})();