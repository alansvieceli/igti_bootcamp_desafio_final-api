const express = require('express');
const transactionRouter = express.Router();
const service = require('../services/transactionService');

transactionRouter.get('/', async (req, res, next) => {
  period = req.query.period;
  if (period) {
    res.send(await service.getByPeriod(period));
  } else {
    next(
      'É necessário informar o parâmentro "periodo", cujo valor deve estar no formato yyyy-mm'
    );
  }
});

//tratamento de todos os erros q derem acima, e usaram
transactionRouter.use((err, req, res, next) => {
  console.log(err);
  res.status(400).send({ error: err });
});

module.exports = transactionRouter;
