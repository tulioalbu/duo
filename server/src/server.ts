import express from "express";

const app = express();

app.get("/ads", (req, res) => {
  return res.json([
    {
      id: 1, nome: "Ad 1", description: "Description 1",
    },
  ]);  
});

app.listen(3000);

