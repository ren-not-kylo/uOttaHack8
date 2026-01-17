

const GEMINI_API_KEY = "KEY";

const endpoint =
  `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`;

document.getElementById("send").addEventListener("click", async () => {
  //const prompt = document.getElementById("prompt").value;

  const number = document.getElementById("number").value;
  const options = document.getElementById("options").value;
  const traits = document.getElementById("traits").value;
  const opt_traits = document.getElementById("opt_traits").value;

  //const number = 5
  //const options = 4
  //const traits = "boy, likes cars, likes sports, 20 years old"
  //const opt_traits = document.getElementById("opt_traits").value;

  const final_prompt = "Give me" + number + "questions that are based on a person witht he following traits:" + traits + "Each question should have" + options + "options. " + opt_traits +  "Only give the questions and answers. Base the questions around what a user of this specific profile may enjoy seeing."

  //Option 1 should follow: brave, courageous traits. Option 2 should follow: smart, clever traits. Option 3 should follow: kind, honest traits. Option 4 should follow: cunning, ambitious traits. Only give the questions and answers. Base the questions around what a user of this specific profile may enjoy seeing."

  const responseBox = document.getElementById("response");

  responseBox.textContent = "Thinking...";

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [{ text: final_prompt }]
          }
        ]
      })
    });

    const data = await res.json();
    responseBox.textContent =
      data.candidates?.[0]?.content?.parts?.[0]?.text || "No response";
  } catch (err) {
    responseBox.textContent = "Error: " + err.message;
  }
});
