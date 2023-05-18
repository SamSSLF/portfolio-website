require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { Client } = require("@notionhq/client");
const notion = new Client({
  auth: process.env.VITE_APP_NOTION_API_KEY,
});

const app = express();

app.use(express.json());

app.use(cors());

app.get("/", async (req, res) => {
  return res.json({ message: "Hello World" });
});

// app.post("/api/create-page", async (req, res) => {
//   try {
//     const response = await notion.pages.create(req.body);
//     res.json(response);
//   } catch (error) {
//     res.json(error);
//   }
// });
app.post("/api/create-page", async (req, res) => {
  try {
    const response = await notion.pages.create({
      parent: {
        type: "database_id",
        database_id: process.env.VITE_APP_NOTION_DATABASE_ID,
      },
      properties: {
        "First Name": {
          title: [
            {
              type: "text",
              text: {
                content: req.body.firstName,
              },
            },
          ],
        },
        "Last Name": {
          rich_text: [
            {
              type: "text",
              text: {
                content: req.body.lastName,
              },
            },
          ],
        },
        RSVP: {
          select: {
            name: req.body.rsvp,
          },
        },
        Mobile: {
          phone_number: req.body.mobileNumber,
        },
        Message: {
          rich_text: [
            {
              type: "text",
              text: {
                content: req.body.message,
              },
            },
          ],
        },
      },
    });
    res.json(response);
  } catch (error) {
    res.json(error);
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));
