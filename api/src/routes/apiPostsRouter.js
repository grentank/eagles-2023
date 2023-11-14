const express = require('express');
const { Post, User } = require('../../../db/models');

const apiPostsRouter = express.Router();

apiPostsRouter
  .route('/')
  .get(async (req, res) => {
    try {
      const posts = await Post.findAll({ include: User });
      res.json(posts);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  })
  .post(async (req, res) => {
    try {
      const post = await Post.create({
        ...req.body,
        authorId: res.locals.user.id,
      });
      const postWithAuthor = await Post.findByPk(post.id, {
        include: User,
      });
      res.json(postWithAuthor);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  });

apiPostsRouter
  .route('/:id')
  .delete(async (req, res) => {
    try {
      const post = await Post.findByPk(req.params.id);
      await post.destroy();
      res.sendStatus(200);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  })
  .patch(async (req, res) => {
    try {
      const post = await Post.findByPk(req.params.id);
      await post.update(req.body);
      const postWithAuthor = await Post.findByPk(post.id, {
        include: User,
      });
      res.json(postWithAuthor);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  });

module.exports = apiPostsRouter;
