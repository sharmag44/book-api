exports.localeErrors = (req, res, next) => {
     try {
          const language = req.headers['language'] || 'en';
          const errors = require(`../../common/locale/${language}.js`);
          if (!errors) throw 'language not preset';
          req.errors = { ...errors, ...req.errors };
          req.language = language;
          next();
     } catch (error) {
          res.send({ isSuccess: false, error: 'language not preset' });
     }
};
