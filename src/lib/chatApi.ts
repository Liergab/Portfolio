import { GoogleGenerativeAI } from "@google/generative-ai";

// Use environment variable for API key
const API_KEY = "AIzaSyCeHIECzNOFtuUJQiEYHoIXAutFHQi7fCA";
const genAI = new GoogleGenerativeAI(API_KEY);

const BRYAN_RUBIO_CONTEXT = `
You are Bryan Gabriel Rubio's AI assistant. Here's Bryan's professional information:

PERSONAL INFO:
- Name: Bryan Gabriel Rubio
- Location: Unisan, Quezon, Philippines
- Role: Full Stack Developer | Technology Enthusiast
- Status: Currently working as Technology Developer at Uzaro Tech Solutions
- Education: Bachelor of Science in Information Technology from Polytechnic University of the Philippines Unisan Campus (2019-2023)
- Started coding: 2019

CURRENT POSITION:
Technology Developer (Backend) at Uzaro Tech Solutions (Nov 2024 – Present)
- Focused on backend API development using Node.js and Express
- Designed and implemented secure and scalable RESTful APIs for internal systems
- Integrated third-party services and APIs to automate workflows and streamline operations
- Collaborated with frontend developers to ensure smooth data exchange and API usability
- Integrated Tuya APIs into a custom web application, enabling real-time device control and status monitoring
- Developed backend systems to automate smart devices using the Tuya IoT platform

WORK EXPERIENCE:
1. Technology Developer (Backend) at Uzaro Tech Solutions (Nov 2024 – Present)
   - Focused on backend API development using Node.js and Express
   - Designed and implemented secure and scalable RESTful APIs for internal systems
   - Integrated third-party services and APIs to automate workflows and streamline operations
   - Collaborated with frontend developers to ensure smooth data exchange and API usability
   - Integrated Tuya APIs into a custom web application, enabling real-time device control and status monitoring
   - Developed backend systems to automate smart devices using the Tuya IoT platform

2. System Staff (Desktop Developer) at Nippon Micrometal (August 2024 – November 2024)
   - Developed and maintained internal desktop tools using VB.NET
   - Manually retrieved and analyzed production and quality data by writing MySQL queries
   - Gained hands-on experience in a corporate environment, working with legacy systems and structured workflows
   - Prepared, validated, and double-checked the data embedded in QR codes to ensure accuracy and prevent errors in production workflows

3. Frontend Developer at OJT Connect (December 2023 - July 2024)
   - Created responsive and reusable user interfaces using React.js and Tailwind CSS to enhance the OJT Connect platform
   - Translated UI/UX designs into clean, maintainable code with focus on performance and accessibility
   - Integrated frontend components with backend APIs to deliver dynamic and interactive features
   - Participated in an Agile development environment, contributing to sprint planning, daily stand-ups, and sprint reviews
   - Collaborated closely with backend developers and designers to ensure a consistent user experience and efficient workflow
   - Conducted manual QA testing, wrote test scenarios, and executed test cases

TECHNICAL SKILLS:
- Frontend: React, Next.js, TypeScript, JavaScript, CSS3, Tailwind CSS, Vue.js
- Backend: Node.js, PHP, Laravel, Express.js, RESTful APIs
- Database: MySQL, MongoDB
- Tools & Others: Git, GitHub, Postman, Figma, VS Code, Cursor

FEATURED PROJECTS:
1. Career Compass Analytics Dashboard - React.js admin dashboard with data visualization
2. Room Rental Platform - Full-stack MERN application with React and Express.js
3. OJT Connect Platform - Internship connection platform (Frontend contribution)
4. ALMA LMS System - Learning Management System for managing courses, students, and assessments
5. QC Sports App - Sports booking and management application for events and facilities
6. RYDE App - Ride-booking and transportation platform focused on seamless user experience
7. HRIS System - Human Resource Information System for employee and HR process management

EXPERTISE & FOCUS:
- Full Stack Developer specializing in React, Next.js, TypeScript, and Node.js
- Backend API development expert with experience in RESTful APIs
- Building modern web applications with focus on scalability and security
- Experience with IoT platform integration (Tuya)
- Desktop application development with VB.NET
- Database management and optimization (MySQL, MongoDB)

PROFESSIONAL INTERESTS:
- Learning about emerging technologies
- Exploring web development trends
- Staying current with industry best practices
- Experimenting with new frameworks and tools
- Contributing to the developer community

CONTACT:
- Email: bryangabriel.rubio@gmail.com
- LinkedIn: linkedin.com/in/bryan-gabriel-rubio
- GitHub: github.com/bryangabriel
- Available for speaking at tech events
- Open to new opportunities and collaborations

Always respond as Bryan Gabriel Rubio's AI assistant, providing helpful information about his skills, experience, and availability. Be professional, friendly, and knowledgeable about web development topics. Focus on his backend API development expertise and full-stack capabilities.
`;

// List available models
async function listAvailableModels(): Promise<string[]> {
  try {
    const apiVersions = ["v1", "v1beta"];
    for (const version of apiVersions) {
      try {
        const response = await fetch(
          `https://generativelanguage.googleapis.com/${version}/models?key=${API_KEY}`
        );
        if (response.ok) {
          const data = await response.json();
          const models = data.models?.map((m: any) => m.name) || [];
          console.log(`Available models for ${version}:`, models);
          return models;
        }
      } catch (err) {
        console.warn(`Failed to list models for ${version}:`, err);
      }
    }
  } catch (err) {
    console.warn("Failed to list models:", err);
  }
  return [];
}

// Fallback REST API function if SDK models don't work
async function callGeminiRestAPI(prompt: string): Promise<string> {
  // Updated with working models based on available models
  const modelNames = [
    "gemini-2.5-flash",
    "gemini-2.5-pro",
    "gemini-2.0-flash",
    "gemini-2.0-flash-001",
    "gemini-2.5-flash-lite",
    "gemini-pro",
    "gemini-1.5-pro",
    "gemini-1.5-flash",
  ];
  const apiVersions = ["v1", "v1beta"];

  // Try different API versions and model combinations
  for (const apiVersion of apiVersions) {
    for (const modelName of modelNames) {
      try {
        const url = `https://generativelanguage.googleapis.com/${apiVersion}/models/${modelName}:generateContent?key=${API_KEY}`;
        console.log(`Trying REST API: ${apiVersion}/${modelName}`);

        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: prompt,
                  },
                ],
              },
            ],
          }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.warn(
            `REST API call failed for ${apiVersion}/${modelName}:`,
            errorData
          );
          continue;
        }

        const data = await response.json();
        if (
          data.candidates &&
          data.candidates[0] &&
          data.candidates[0].content
        ) {
          console.log(
            `Successfully received response via REST API from ${apiVersion}/${modelName}`
          );
          return data.candidates[0].content.parts[0].text;
        }
      } catch (err) {
        console.warn(
          `REST API call failed for ${apiVersion}/${modelName}:`,
          err
        );
        continue;
      }
    }
  }

  // If all attempts failed, try to list available models
  console.log(
    "All standard models failed. Attempting to list available models..."
  );
  const availableModels = await listAvailableModels();
  if (availableModels.length > 0) {
    console.log("Found available models:", availableModels);
    // Try the first available model
    for (const modelPath of availableModels.slice(0, 3)) {
      // Extract model name from full path (e.g., "models/gemini-pro" -> "gemini-pro")
      const modelName = modelPath.replace(/^models\//, "");
      for (const apiVersion of apiVersions) {
        try {
          const url = `https://generativelanguage.googleapis.com/${apiVersion}/models/${modelName}:generateContent?key=${API_KEY}`;
          console.log(`Trying available model: ${apiVersion}/${modelName}`);

          const response = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              contents: [
                {
                  parts: [
                    {
                      text: prompt,
                    },
                  ],
                },
              ],
            }),
          });

          if (response.ok) {
            const data = await response.json();
            if (
              data.candidates &&
              data.candidates[0] &&
              data.candidates[0].content
            ) {
              console.log(
                `Successfully received response from available model: ${modelName}`
              );
              return data.candidates[0].content.parts[0].text;
            }
          }
        } catch (err) {
          continue;
        }
      }
    }
  }

  throw new Error(
    "All REST API attempts failed. Please check your API key and ensure it has access to Gemini models."
  );
}

export async function sendChatMessage(message: string): Promise<string> {
  try {
    if (!message.trim()) {
      throw new Error("Message is required");
    }

    // Check if API key is available
    if (!API_KEY || API_KEY === "AIzaSyCeHIECzNOFtuUJQiEYHoIXAutFHQi7fCA") {
      console.warn(
        "Using default API key. Please set VITE_GEMINI_API_KEY in your .env file"
      );
    }

    const prompt = `${BRYAN_RUBIO_CONTEXT}

User Question: ${message}

Please provide a helpful response as Bryan Gabriel Rubio's AI assistant. If the question is about Bryan's work, skills, experience, or availability, provide detailed and accurate information. If it's a general question, still respond helpfully but try to relate it back to Bryan's expertise when relevant. Keep responses conversational and concise.`;

    // Try SDK approach first with working models
    const modelNames = [
      "gemini-2.5-flash",
      "gemini-2.5-pro",
      "gemini-2.0-flash",
      "gemini-pro",
      "gemini-1.5-pro",
      "gemini-1.5-flash",
    ];
    let lastError: any;

    for (const modelName of modelNames) {
      try {
        console.log(`Trying SDK model: ${modelName}`);
        const model = genAI.getGenerativeModel({ model: modelName });

        console.log("Sending request to Gemini API via SDK...");
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        console.log(`Successfully received response from ${modelName}`);
        return text;
      } catch (err: any) {
        console.warn(`SDK Model ${modelName} failed:`, err);
        lastError = err;

        // If it's a 404, try next model. If it's a different error (like auth), break
        if (err?.error?.code !== 404 && err?.code !== 404) {
          console.error(
            "Non-404 error encountered, trying REST API fallback:",
            err
          );
          break;
        }
        continue; // Try next model
      }
    }

    // If SDK failed, try REST API as fallback
    console.log("SDK approach failed, trying REST API...");
    try {
      return await callGeminiRestAPI(prompt);
    } catch (restError) {
      console.error("REST API also failed:", restError);
    }

    // If all methods failed, throw the last error with helpful message
    if (lastError) {
      console.error("All methods failed. Last error:", lastError);
      throw new Error(
        `All Gemini models failed. Last error: ${
          lastError?.error?.message || lastError?.message || "Unknown error"
        }. Please check your API key and ensure it has access to Gemini models.`
      );
    }

    throw new Error("No models available");
  } catch (error) {
    console.error("Chat API error details:", error);

    // More detailed error handling
    if (error instanceof Error) {
      const errorMessage = error.message.toLowerCase();

      // API key errors
      if (
        errorMessage.includes("api_key") ||
        errorMessage.includes("authentication") ||
        errorMessage.includes("invalid api key") ||
        errorMessage.includes("permission denied")
      ) {
        console.error("API Key error detected");
        return "I'm Bryan Gabriel Rubio's AI assistant! There's an issue with the API configuration. Please check that your Google Gemini API key is correctly set in the environment variables. For now, here's some info: Bryan is a Full Stack Developer specializing in React, Next.js, TypeScript, and Node.js. He's currently working as a Technology Developer at Uzaro Tech Solutions. You can reach him at bryangabriel.rubio@gmail.com";
      }

      // Rate limit errors
      if (
        errorMessage.includes("rate limit") ||
        errorMessage.includes("quota")
      ) {
        return "I'm experiencing high traffic right now. Please try again in a moment, or feel free to reach out directly to Bryan at bryangabriel.rubio@gmail.com";
      }

      // Network errors
      if (
        errorMessage.includes("network") ||
        errorMessage.includes("fetch") ||
        errorMessage.includes("failed to fetch")
      ) {
        return "I'm having trouble connecting to the AI service right now. Please check your internet connection and try again, or contact Bryan directly at bryangabriel.rubio@gmail.com";
      }

      // Log the actual error for debugging
      console.error("Unexpected error:", errorMessage);
    }

    // Generic fallback - always return a string, never throw
    return "I apologize, but I'm having trouble responding right now. Please try again or reach out directly at bryangabriel.rubio@gmail.com. If the problem persists, please check the browser console for more details.";
  }
}
