const express = require('express');
const { Message, User } = require('../../db/models');
const verifyAccessToken = require('../midddlewares/verifyAccessToken');

const apiMessagesRouter = express.Router();

apiMessagesRouter
  .route('/')
  .get(async (req, res) => {
    try {
      const posts = await Message.findAll({
        include: User,
        order: [['createdAt', 'DESC']],
      });
      res.json(posts);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  })
  .post(verifyAccessToken, async (req, res) => {
    try {
      const post = await Message.create({
        ...req.body,
        authorId: res.locals.user.id,
      });
      const postWithAuthor = await Message.findByPk(post.id, {
        include: User,
      });
      res.status(201).json(postWithAuthor);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  });

apiMessagesRouter
  .route('/:id')
  .delete(verifyAccessToken, async (req, res) => {
    try {
      const post = await Message.findByPk(req.params.id);
      await post.destroy();
      res.sendStatus(200);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  })
  .patch(async (req, res) => {
    try {
      const post = await Message.findByPk(req.params.id);
      await post.update(req.body);
      const postWithAuthor = await Message.findByPk(post.id, {
        include: User,
      });
      res.json(postWithAuthor);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  });

module.exports = apiMessagesRouter;
