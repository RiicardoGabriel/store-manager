const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { productsMock,
  productsByIdMock,
  productCreatMock,
  productSearchMock } = require('./mocks/products.controller.mock');

const { productsService } = require('../../../src/services');
const productsController = require('../../../src/controllers/products.controller');

describe('Teste de unidade do productsController', function () {
  it('Listando os produtos', async function () {
    const res = {};
    const req = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(productsService, 'getProducts')
      .resolves({ type: null, message: [productsMock] })
    
    await productsController.openProducts(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith([productsMock]);
  })
  it('Listando os produtos por id', async function () {
    const res = {};
    const req = { params: {id: 1} };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(productsService, 'getProductsId')
      .resolves({ type: null, message: [productsByIdMock] })

    await productsController.openProductsId(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith([productsByIdMock]);
  })
  it('Criando produtos', async function () {
    const res = {};
    const req = { body: { name: 'Não sei um nome' } };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(productsService, 'createProduct')
      .resolves({ type: null, message: [productCreatMock] })

    await productsController.createProduct(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith([productCreatMock]);
  })
  it('Atualizando produtos', async function () {
    const res = {};
    const req = {
      body: { name: 'Não sei um nome' },
      params: { id: 1 }
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(productsService, 'putProduct')
      .resolves({ type: null, message: [productCreatMock] })

    await productsController.updateProduct(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith([productCreatMock]);
  })
  it('Deletando produtos', async function () {
    const res = {};
    const req = { params: { id: 1 } };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(productsService, 'delProduct')
      .resolves({ type: null, message: [] })

    await productsController.deleteProduct(req, res);

    expect(res.status).to.have.been.calledWith(204);
    expect(res.json).to.have.been.calledWith([]);
  })
  it('Pesquisando produtos', async function () {
    const res = {};
    const req = { query: { q: 'Martelo' } };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(productsService, 'searchProduct')
      .resolves({ type: null, message: [productSearchMock] })

    await productsController.searcProduct(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith([productSearchMock]);
  })
})