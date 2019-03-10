const mathService = require('../business/services/MathService');

module.exports = (request, response) => {
  const operand1 = Number(request.query.operand1);
  const operand2 = Number(request.query.operand2);
  console.log(`add operands : ${operand1} & ${operand2}`);

  if (Number.isNaN(operand1) || Number.isNaN(operand2)) {
    response.status(400).send({message: 'Missing or invalid operands in the request.'});
  }

  const result = mathService.add(operand1, operand2);
  response.send({ result: result });
};
