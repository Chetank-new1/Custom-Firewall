// server.js
const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "Public")));

// Route to handle content requests
app.get("/content/:type", (req, res) => {
  const contentType = req.params.type;
  // Logic to provide different content based on the type
  // For demonstration, we'll return simple messages
  if (contentType === "file1") {
    res.sendFile(path.join(__dirname, "files", "file1.txt"));
  } else if (contentType === "file2") {
    res.sendFile(path.join(__dirname, "files", "file2.txt"));
    // console.log(`file 2 content ${file2.txt}`);
  } else {
    res.status(404).send("Content not found");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
