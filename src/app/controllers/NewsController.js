class NewsController {
    //[GET] /news

    index(req, res) {
        res.render('news');
    }

    show(req, res) {
        res.send('detail page');
    }
}

module.exports = new NewsController();
