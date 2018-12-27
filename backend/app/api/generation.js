const { Router } = require('express');

const router = new Router();

router.get('/', (req, res) => {
    res.json(req.app.locals.engine.generation);
});

module.exports = router;