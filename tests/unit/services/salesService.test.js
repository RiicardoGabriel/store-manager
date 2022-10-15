const { expect } = require('chai');
const sinon = require('sinon');
const { salesModel } = require('../../../src/models/');
const { salesService } = require('../../../src/services');
const { newSale, upSalesMock } = require('../models/mocks/salesMock');

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
  it('Testa retorno de vendas', async function () {
    sinon.stub(salesModel, 'findBySales').resolves(true);

    const message = await salesService.getSales();

    expect(message.type).to.equal(null);
    expect(message.message).to.equal(true);
  });
  it('Testa a crição de vendas', async function () {
    sinon.stub(salesModel, 'insert').resolves(true);

    const message = await salesService.createSale(newSale);

    expect(message.type).to.equal(null);
    expect(message.message).to.equal(true);
  });
  it('Testa a remoção de vendas', async function () {
    sinon.stub(salesModel, 'deleteSale').resolves(true);

    const message = await salesService.deleteSale(1);

    expect(message.type).to.equal(null);
    expect(message.message).to.equal(true);
  });
  it('Testa a atualização de vendas', async function () {
    sinon.stub(salesModel, 'updateSale').resolves(true);

    const message = await salesService.upSale(1, upSalesMock);

    expect(message.type).to.equal(null);
    expect(message.message).to.equal(true);
  });

  afterEach(function () {
    sinon.restore();
  });
});