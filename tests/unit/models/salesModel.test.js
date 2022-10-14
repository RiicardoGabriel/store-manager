const { expect } = require('chai');
const sinon = require('sinon');
const { salesModel } = require('../../../src/models');

const connection = require('../../../src/models/connection');
const { sales } = require('./mocks/salesMock');

describe('Testes de unidade do model de vendas', function () {
  afterEach(sinon.restore);
  it('Recuperando a lista de vendas', async function () {
    sinon.stub(connection, 'execute').resolves([sales]);
    const result = await salesModel.findBySales();
    expect(result).to.be.deep.equal(sales);
  });

  it('Recuperando uma venda a partir do seu id', async function () {
    sinon.stub(connection, 'execute').resolves([sales[0]]);
    const result = await salesModel.findBySaleId(1);
    expect(result).to.be.deep.equal(sales[0]);
  });
});
