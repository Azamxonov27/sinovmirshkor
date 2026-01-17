
import { GoogleGenAI } from "@google/genai";

export const askMirishkorBot = async (query: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: query,
      config: {
        systemInstruction: "Siz Mirishkor tumani bo'yicha mutaxassis maslahatchisiz. Foydalanuvchilarga tuman tarixi, iqtisodiyoti va ma'muriyati haqida ma'lumot bering. Javoblaringiz faqat o'zbek tilida, do'stona va aniq bo'lsin.",
        temperature: 0.7,
      }
    });
    return response.text || "Kechirasiz, ma'lumot topilmadi.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Hozirda tizimda uzilish mavjud. Iltimos keyinroq urinib ko'ring.";
  }
};
