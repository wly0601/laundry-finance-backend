module.exports = function getRoot(req, res) {
    res.status(200).json({
      status: "OK",
      message: "Omah Laundry API is up and running!",
    });
  }