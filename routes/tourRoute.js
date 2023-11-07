const express = require('express');
const {
  getTours,
  getTourDetail,
  createTour,
  updateTour,
  deleteTour,
  getToursStats,
  getMonthlyPlan,
} = require('../controllers/tourController');
const { aliasTopTours } = require('../middlewares/aliasTopTours');

const router = express.Router();

router.route('/top-5-tours').get(aliasTopTours, getTours);
router.route('/stats').get(getToursStats);
router.route('/monthly-plan/:year').get(getMonthlyPlan);
router.route('/').get(getTours).post(createTour);
router.route('/:id').get(getTourDetail).put(updateTour).delete(deleteTour);

module.exports = router;
