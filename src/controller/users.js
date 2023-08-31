const getAllUser = async (req, res) => {
  res.json({
    status: 200,
    message: "GET Users Endpoint",
  });
};

const createUser = async (req, res) => {
  res.json({
    status: 200,
    message: "POST Users Endpoint",
  });
};

module.exports = {
  getAllUser,
  createUser,
};
