const express = require('express');
const router = express.Router();
const upload = require('../upload');

router.post('/', upload.single('file'), (req, res) => {
  res.json({
    success: true,
    message: 'File uploaded successfully!',
    file: req.file
  });
});

module.exports = router;
