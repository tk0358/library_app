const catchAsync = require('../utils/catchAsync');
const Material = require('../models/materialModel');

exports.getMaterialIndexPerType = catchAsync(async (req, res) => {
  const books = await Material.find({ type: 'book' });
  const comics = await Material.find({ type: 'comic' });
  const cds = await Material.find({ type: 'CD' });
  const dvds = await Material.find({ type: 'DVD' });

  res.status(200).render('materialIndexPerType', {
    title: '借りたい資料一覧',
    books,
    comics,
    cds,
    dvds,
  });
});
