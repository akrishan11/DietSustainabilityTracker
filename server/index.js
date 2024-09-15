const express = require("express");

const path = require("path");

const app = express();

const { GoogleGenerativeAI } = require("@google/generative-ai");

app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "/index.html"));
});

app.listen(3000, () => {
  console.group("Server is running on http://localhost:3000");
});

const usda_api_key = process.env.USDA_API_KEY;

app.post("/data", (req, res) => {
  const { data } = req.body;
  console.log("Added food:", data);

  res.json({ message: "food successfully added", recievedData: data });
});

const food_categories = {
  "Beef (beef herd)": 99.48,
  "Dark Chocolate": 46.65,
  "Lamb & Mutton": 39.72,
  "Beef (dairy herd)": 33.3,
  Coffee: 28.53,
  "Prawns (farmed)": 26.87,
  Cheese: 23.88,
  "Fish (farmed)": 13.63,
  "Pig Meat": 12.31,
  "Poultry Meat": 9.87,
  Eggs: 4.67,
  Rice: 4.45,
  Groundnuts: 3.23,
  "Cane Sugar": 3.2,
  Tofu: 3.16,
  Milk: 3.15,
  Oatmeal: 2.48,
  Tomatoes: 2.09,
  "Beet Sugar": 1.81,
  Wine: 1.79,
  "Other Pulses": 1.79,
  Maize: 1.7,
  "Wheat & Rye": 1.57,
  "Berries & Grapes": 1.53,
  Cassava: 1.32,
  Barley: 1.18,
  "Other Fruit": 1.05,
  "Soy milk": 0.98,
  Peas: 0.98,
  Bananas: 0.86,
  "Other Vegetables": 0.53,
  Brassicas: 0.51,
  "Onions & Leeks": 0.5,
  Potatoes: 0.46,
  Apples: 0.43,
  Nuts: 0.43,
  "Root Vegetables": 0.43,
  "Citrus Fruit": 0.39,
};

category_list = Object.keys(food_categories);

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt =
  "categorize" +
  food +
  "into the group it most closely belongs to in terms of sustainability: " +
  category_list +
  ". Answer with just the name of the category";

async function getResult() {
  const result = await model.generateContent(prompt);
  console.log(result.response.text());
}

getResult();
