const { expect } = require('chai');
const sinon = require('sinon');
const { salesModel } = require('../../../src/models/');
const { salesService } = require('../../../src/services');

describe('Verificando service Sales', function () {
  describe('Atribuições de venda', function () {
    it('Estão falhando passando id errado', async function () {
      sinon.stub(salesModel, 'findBySaleId').resolves(true);

      const id = 50;
      const error = await salesService.getSaleId(id);

      expect(error.code).to.equal(404);
      expect(error.error).to.equal('Sale not found');
    });
  });

  afterEach(function () {
    sinon.restore();
  });
});