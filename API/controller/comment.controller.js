const Comment = require('../models/comment.model');

const listComments = async (req, res) => {
  try {
    const { playlistId } = req.params;
    const comments = await Comment.find({ playlist: playlistId });
    res.json(comments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener comentarios' });
  }
};

const createComment = async (req, res) => {
  try {
    const { text, author, playlist } = req.body;
    const newComment = new Comment({ text, author, playlist });
    const savedComment = await newComment.save();
    res.json(savedComment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear comentario' });
  }
};

const deleteComment = async (req, res) => {
  try {
    const { commentId } = req.params;
    await Comment.findByIdAndDelete(commentId);
    res.json({ message: 'Comentario eliminado con éxito' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar comentario' });
  }
};

module.exports = {
  listComments,
  createComment,
  deleteComment,
};
