const router = require("express").Router();
const model = require("../../models");

// mngr_fetchMessages()
// matches with /managerapi/messages/all
router.get("/all", function (req, res) {
  model.Message.find({})
    .sort({ sentAt: 1 })
    .then((data) => res.json(data))
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send({ msg: "Ocurrió un error" });
    });
});

// mngr_markSeen()
// matches with /managerapi/messages/markSeen/:msgId
router.put("/markSeen/:msgId", function (req, res) {
  model.Message.findByIdAndUpdate(req.params.msgId, {
    seen: true,
  })
    .then((data) => res.json(data))
    .catch((err) => {
      console.log("@error", err);
      res.status(422).send({ msg: "Ocurrió un error" });
    });
});

module.exports = router;
