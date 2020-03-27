const router = require("express").Router();
const model = require("../../models");

// fetchMessages()
// matches with /api/manager/messages/all
router.get("/messages/all", function(req, res) {
  model.Message.find({})
    .sort({ sentAt: 1 })
    .then(data => res.json(data))
    .catch(err => {
      console.log("@error", err);
      res.status(422).send({ msg: "Ocurrió un error" });
    });
});

module.exports = router;
