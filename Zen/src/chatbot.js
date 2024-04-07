import readline from 'readline';
import { GoogleGenerativeAI } from '@google/generative-ai';

// console.log(process.env.API_KEY)
const genAI = new GoogleGenerativeAI("AIzaSyCXH0pDnwUA_7MS2134pPqDtojnJMDYfLA");
// Define a function to interact with the chatbot
let counter = 5;
async function chatbotInteraction(userInput) {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-pro"});
        const chat = model.startChat({
            history: [
              {
                role: "user",
                parts: [{ text: "Hello, You are my Stress,axiety and depresiion therapist." }],
              },
              {
                role: "model",
                parts: [{ text: "Great to meet you. How are you feeling today?" }],
              },
            ],
            generationConfig: {
              maxOutputTokens: 100,
            },
          });        
          const result = await chat.sendMessage(userInput);
          let response = await result.response;
          if (!response.text() && counter>0){
            response = chatbotInteraction(userInput);
            counter--;
          }

        return response || "Okey I am listening you tell me more about it..";
    } catch (error) {
        return `Error communicating with the chatbot: ${error}`;
    }
}

// Define an asynchronous function for the conversation loop
async function startConversation() {
    console.log("Welcome to the Mental Health Chatbot!");
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.setPrompt('You: ');
    rl.prompt();

    rl.on('line', async (userMessage) => {
        if (userMessage.toLowerCase() === "exit" || userMessage.toLowerCase() === "quit") {
            console.log("Chatbot: Goodbye! Take care.");
            rl.close();
            return;
        }
        const chatbotResponse = await chatbotInteraction(userMessage);
        console.log(`Chatbot: ${chatbotResponse.text()}`);

        // Suggest instrumental music randomly (you can customize this part)
        // const instrumentalMusic = [
        //     "Listen to some calming piano music.",
        //     "Try ambient sounds like ocean waves or rainforest.",
        //     "Explore classical music compositions."
        // ];
        // console.log(`Chatbot: ${instrumentalMusic[Math.floor(Math.random() * instrumentalMusic.length)]}`);

        rl.prompt();
    });

    rl.on('close', () => {
        process.exit(0);
    });
}

// Call the function to start the conversation
startConversation();


