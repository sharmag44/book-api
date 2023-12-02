'use strict';
const apiRoutes = require('../helpers/apiRoute');

module.exports.configure = (app) => {
      app.get('/', (req, res) => {
            res.render('index', {
                  title: 'Book API',
            });
      });

      app.get('/api', (req, res) => {
            res.render('index', {
                  title: 'Book API',
            });
      });

      let api = apiRoutes(app);


      api.model('books').register([
            {
                  action: 'POST',
                  method: 'create',
            },
            {
                  action: 'GET',
                  method: 'get',
                  url: '/:id',
            },
            {
                  action: 'DELETE',
                  method: 'delete',
                  url: '/:id',
            },
            {
                  action: 'PUT',
                  method: 'update',
                  url: '/:id',
            },
            {
                  action: 'GET',
                  method: 'search',
            },
      ]);

};
