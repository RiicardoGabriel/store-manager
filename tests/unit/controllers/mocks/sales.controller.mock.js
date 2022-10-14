const salesMock = [
  {
    "date": "2022-10-14T16:51:25.000Z",
    "saleId": 1,
    "productId": 1,
    "quantity": 5
  },
  {
    "date": "2022-10-14T16:51:25.000Z",
    "saleId": 1,
    "productId": 2,
    "quantity": 10
  },
  {
    "date": "2022-10-14T16:51:25.000Z",
    "saleId": 2,
    "productId": 3,
    "quantity": 15
  },
  {
    "date": "2022-10-14T16:51:25.000Z",
    "saleId": 3,
    "productId": 1,
    "quantity": 1
  },
  {
    "date": "2022-10-14T16:51:25.000Z",
    "saleId": 3,
    "productId": 2,
    "quantity": 5
  }
];

const saleByIdMock = [
  {
    "date": "2022-10-14T16:51:25.000Z",
    "productId": 1,
    "quantity": 5
  },
  {
    "date": "2022-10-14T16:51:25.000Z",
    "productId": 2,
    "quantity": 10
  }
]

const salesMockCreate = [
  {
    "productId": 1,
    "quantity": 1
  },
  {
    "productId": 2,
    "quantity": 5
  }
]

const newSaleMock = { "id": 4, "itemsSold": salesMockCreate }

module.exports = {
  salesMock,
  saleByIdMock,
  salesMockCreate,
  newSaleMock,
}