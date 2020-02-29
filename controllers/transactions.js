// @desc Get all transactions
// @desc GET /api/v1/transactions
// @access Public

exports.getTransactions = (req, res, next) => {
  res.send('GET Transactions')
}

// @desc Add all transactions
// @desc POST /api/v1/transactions
// @access Public

exports.addTransactions = (req, res, next) => {
  res.send('POST Transactions')
}

// @desc Delete transactions
// @desc DELETE /api/v1/transactions/:id
// @access Public

exports.deleteTransactions = (req, res, next) => {
  res.send('Delete Transaction')
}