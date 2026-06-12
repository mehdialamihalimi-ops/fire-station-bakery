/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route: AI Chef Chat
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, recipeTitle } = req.body;
      const apiKey = process.env.GEMINI_API_KEY;

      if (!apiKey) {
        // Return smart local responses if no API Key is provided
        console.warn("GEMINI_API_KEY is not defined. Using smart local response.");
        return res.json({
          response: getSmartMockResponse(message, recipeTitle)
        });
      }

      const ai = new GoogleGenAI({ apiKey });
      const prompt = `You are "The Firehouse AI Brewmaster & Historian", an expert advisor for "The Old Fire Station in Salford" (Est. 1903).
Answer questions about Victorian firehouse history, our sourdough starter 'Nellie', spent-grain dog recycling, or craft brewing! Keep your response warm and under 130 words.
User's message: "${message}"`;

      const response = await ai.models.generateContent({
        model: 'gemini-1.5-flash',
        contents: prompt
      });

      res.json({ response: response.text });
    } catch (err: any) {
      console.error("Gemini API error:", err);
      res.status(500).json({ error: err.message || "Internal Server Error" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

function getSmartMockResponse(message: string, recipeTitle: string): string {
  const msg = message.toLowerCase();
  
  if (msg.includes("nellie") || msg.includes("starter") || msg.includes("sourdough") || msg.includes("bread")) {
    return "Our legendary 'Nellie' wild sourdough starter was named after the station's beloved 1910 steam pump engine. Kept bubbling continuously since regeneration, it gives our sourdough its incredible rise and characteristic tangy flavor!";
  }
  
  if (msg.includes("dog") || msg.includes("cookie") || msg.includes("cracker") || msg.includes("biscuit") || msg.includes("spent grain")) {
    return "Our Spent-Grain circular biscuit loop utilizes leftover malt mash from our craft Amber Ale brews. We process, mill, and bake this mash into high-protein, delicious, egg-free peanut butter treats for the pups in our Dog Hall of Fame!";
  }
  
  if (msg.includes("carbon") || msg.includes("travel") || msg.includes("eco") || msg.includes("co2")) {
    return "Our Eco-Travel Carbon Savior system measures real CO2 savings compared to driving to big-box stores and buying mass-produced logistics bread. Walking or cycling to our Salford house saves around 120 grams of carbon dioxide per mile!";
  }
  
  if (msg.includes("history") || msg.includes("1903") || msg.includes("blitz") || msg.includes("restoration")) {
    return "First constructed in 1903 to serve Salford's industrial centers, the Victorian firehouse is a Grade-II listed heritage landmark. It withstood the Salford Blitz in 1941, was decommissioned in 1986, and was brought to life in 2024 as a sourdough bakery and community taproom!";
  }
  
  if (msg.includes("book") || msg.includes("class") || msg.includes("tour") || msg.includes("ticket")) {
    return "Simply scroll down to our Admissions ticket office on the page. You can customize tickets and instantly print digital boarding passes for our Sourdough Baking Class, Brewery Tasting Flight, or Historic Guided Vault Tour!";
  }

  if (msg.includes("hello") || msg.includes("hi") || msg.includes("hey") || msg.includes("crew")) {
    return "Welcome to the Old Fire Station! I am your AI Brewmaster & Historian. Ask me anything about our 1903 Victorian heritage, Nellie's yeast culture, spent brewers' grains, or carbon indicators!";
  }

  return "Splendid question! At the Old Fire Station, we operate a 100% circular baking loop. Our beers generate spent grain for our dog biscuits, and our locally milled organic flour prevents commercial haulage CO2. Let me know if you would like custom baking advice, history notes, or booking instructions!";
}

startServer();
