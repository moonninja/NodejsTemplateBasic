
const home_index = (req, res) => {
  res.render('home/index', { dummy : 'dummy home'});
}

module.exports = {
  home_index
}