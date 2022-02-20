
const test_index = (req, res) => {
  res.render('test/index', { dummy : 'dummy test'});
}

module.exports = {
  test_index
}