const express = require("express");
const router = express.Router();
const tagsDB = require("../data/tags.json");
const fs = require("fs");
const path = require("path");

// GET /tags?search=Ali&trigger=@
router.get("/", (req, res) => {
  const search = (req.query.search || "").toLowerCase();
  const trigger = req.query.trigger || "@";

  const result = tagsDB.filter(tag =>
    tag.trigger === trigger &&
    tag.label.toLowerCase().startsWith(search)   // prefix match
  );

  res.json(result);
});

// POST /tags (add new suggestions dynamically)
router.post("/", (req, res) => {
  const { label, trigger } = req.body;

  if (!label || !trigger) {
    return res.status(400).json({ error: "label & trigger required" });
  }

  const newTag = {
    id: Date.now().toString(),
    label,
    trigger
  };

  tagsDB.push(newTag);

  const filePath = path.join(__dirname, "..", "data", "tags.json");
  fs.writeFileSync(filePath, JSON.stringify(tagsDB, null, 2));

  res.json({ success: true, tag: newTag });
});

module.exports = router;
