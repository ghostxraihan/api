const axios = require('axios');

module.exports = async (req, res) => {
  const { receiver, message } = req.query;

  if (!receiver || !message) {
    return res.status(400).send("Missing receiver or message");
  }

  try {
    const response = await axios.post('https://sysadmin.muthobarta.com/api/v1/send-sms', {
      receiver: receiver,
      message: message,
      remove_duplicate: true
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token 33ebf2d591471c4d65866d19e708f957e8802ca9
      }
    });

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).send(error.response ? error.response.data : error.message);
  }
};
