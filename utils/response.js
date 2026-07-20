exports.success = (res, data) => {
  return res.json({
    success: true,
    data
  });
};

exports.error = (res, message) => {
  return res.status(400).json({
    success: false,
    message
  });
};
