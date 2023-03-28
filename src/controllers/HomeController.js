class HomeController {
  index(req, res) {
    res.json({ 'tudo certo': true });
  }
}

export default new HomeController();
