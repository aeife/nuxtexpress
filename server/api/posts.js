import { Router } from 'express';
import Post from '../models/post';

const router = Router();

router.get('/posts', async (req, res) => {
    const posts = await Post.find({}).exec();
    res.send({posts});
});

export default router;
