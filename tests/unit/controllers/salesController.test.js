const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { salesMock, saleByIdMock, salesMockCreate, newSaleMock } = require('./mocks/sales.controller.mock');

const { salesService } = require('../../../src/services');
const salesController = require('../../../src/controllers/sales.controller');

describe('Teste de unidade do salesController', function () {
  it('Listando vendas', async function () {
    const res = {};
    const req = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(salesService, 'getSales')
      .resolves({ type: null, message: [salesMock] });

    await salesController.openSales(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith([salesMock]);
  });

  it('Buscando uma venda pelo id', async function () {
    const res = {};
    const req = {
      params: { id: 1 },
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(salesService, 'getSaleId')
      .resolves({ type: null, message: saleByIdMock });

    await salesController.openSaleId(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(saleByIdMock);
  });

  it('Cadastrando uma nova venda', async function () {
    const res = {};
    const req = {
      body: salesMockCreate,
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(salesService, 'createSale')
      .resolves({ type: null, message: newSaleMock });

    await salesController.createSale(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(newSaleMock);
  });
  it('Deletando uma venda', async function () {
    const res = {};
    const req = { params: { id: 1 } };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(salesService, 'deleteSale')
      .resolves({ type: null, message: [] });

    await salesController.deleteSale(req, res);

    expect(res.status).to.have.been.calledWith(204);
    expect(res.json).to.have.been.calledWith([]);
  });
});
