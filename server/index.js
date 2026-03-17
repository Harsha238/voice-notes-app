const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

const API_KEY = "5e075e108442228c90e11b494173bf608ecb529d";

// Get balance
app.get("/balance", async (req, res) => {
  try {
    const projectRes = await axios.get(
      "https://api.deepgram.com/v1/projects",
      {
        headers: {
          Authorization: `Token ${API_KEY}`,
        },
      }
    );

    const projectId = projectRes.data.projects[0].project_id;

    const balanceRes = await axios.get(
      `https://api.deepgram.com/v1/projects/${projectId}/balances`,
      {
        headers: {
          Authorization: `Token ${API_KEY}`,
        },
      }
    );

    res.json(balanceRes.data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Failed to fetch balance" });
  }
});

app.listen(3000, () => console.log("Backend running on port 3000"));