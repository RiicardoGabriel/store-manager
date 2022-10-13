// const chai = require('chai');
// const sinon = require('sinon');
// const sinonChai = require('sinon-chai');

// const { expect } = chai;
// chai.use(sinonChai);

// const { productsService } = require('../../../src/services');
// const productsController = require('../../../src/controllers/products.controller');

// describe('Teste de unidade do productsController', function () {
//   it('', async function () {
//     const res = {};
//     const req = {};
//     console.log('oi')

//     res.status = sinon.stub().returns(res);
//     res.json = sinon.stub().returns();
//     sinon.stub(productsService, 'getProducts')
//       .resolves({ type: null, message: [] })
    
//     await productsController.openProductsId(req, res);

//     expect(res.status).to.have.been.calledWith(200);
//     expect(res.json).to.have.been.calledWith([]);
//   })
// })