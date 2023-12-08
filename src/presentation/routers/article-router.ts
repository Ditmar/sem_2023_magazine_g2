import express, { Request, Response } from 'express';
import NoSQLWrapper from '../../data/interfaces/data-sources/no-sql-wrapper';

const ArticleRouter = (db: NoSQLWrapper) => {
    const router = express.Router();
    router.get('/articles/recent', async (req: Request, res: Response) => {
    try {
    const page = parseInt(req.query.page as string) || 1;
    const pageSize = parseInt(req.query.pageSize as string) || 10;
    const recentArticles = await getRecentArticlesMock(page, pageSize);
    res.json(recentArticles);
    } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
    }
   });

    /**
    *  @param {number} page 
    *  @param {number} pageSize 
    *  @returns {Promise<any[]>} 
    */
    async function getRecentArticlesMock(page: number, pageSize: number): Promise<any[]> {
    const allArticle = await db.FindAllArticles();
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedArticles = allArticle.slice(startIndex, endIndex);

    return paginatedArticles;
    };
return router;
};
export default ArticleRouter;