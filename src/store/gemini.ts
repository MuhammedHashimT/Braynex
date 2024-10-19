import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI("AIzaSyD_RNhHsu39Jsuuwxw5dJp3LdpqsaYCSps");

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });



export const singlePrompt = async (prompt: any) => {
    const result = await model.generateContent(prompt);
    const text = result.response.text();
    console.log(text);
    return text;
};

// {
//     history: [
//         {
//             role: "user",
//             parts: [{ text: newPrompt }],
//         },
//     ],
// }

export const singlePromptChat = async (oldPrompts: any, newPrompt: any) => {
    const chat = model.startChat({ history: oldPrompts });
    const result = await chat.sendMessage(newPrompt);
    const text = result.response.text();
    console.log(text);
    return text;
};