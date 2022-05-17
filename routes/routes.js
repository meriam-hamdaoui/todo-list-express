const express = require("express");

const router = express.Router();

let items = [
  "complete todo app",
  "try the blog app",
  "watch the last workshop",
];

let workItems = [];

router.get("/", (req, res) => {
  const today = new Date();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  const day = today.toLocaleDateString("en-US", options);

  res.render("list", { listTitle: day, newListItems: items });
});

router.post("/", (req, res) => {
  let item = req.body.newItem;
  if (req.body.list === "Work List") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

//targetting another routes
router.get("/work", (req, res) => {
  res.render("list", { listTitle: "Work List", newListItems: workItems });
});

router.get("/about", (req, res) => {
  res.render("about");
});

module.exports = router;
