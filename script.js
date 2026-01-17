

const GEMINI_API_KEY = "KEY";

const endpoint =
  `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`;

  var categoryCount;
  //const options = document.getElementById("options").value;
  var attributes;
  //const opt_traits = document.getElementById("opt_traits").value;
  var outcomeString;
  var numQuestions;
  var researchTopic;

document.getElementById("send").addEventListener("click", async () => {
  //const prompt = document.getElementById("prompt").value;
    
    categoryCount = document.querySelectorAll('.outcome-block').length;
    //const options = document.getElementById("options").value;
    attributes = document.getElementById("attributes").value;
    //const opt_traits = document.getElementById("opt_traits").value;
    outcomeString = getOutcomeString();
    numQuestions = document.getElementById('numQuestions').value;
    researchTopic = document.getElementById('researchTopic').value;

    console.log("User attributes: ", attributes);
    console.log('Number of Questions:', numQuestions);
    console.log('Research Goals:', researchTopic);
    console.log("number of options: ", categoryCount);
    console.log('Outcome String:', outcomeString);
  
  //const number = 5
  //const options = 4
  //const traits = "boy, likes cars, likes sports, 20 years old"
  //const opt_traits = document.getElementById("opt_traits").value;

  const final_prompt = "I'm creating a survey that determines the " + researchTopic + " of each participant. Give me" + numQuestions + "questions that are based on a person with the following traits:" + attributes + "Each question should have" + categoryCount + "options. The traits associated with each category are as follows:" + outcomeString +  ". Only give the questions and answers. Base the questions around what a user of this specific profile may enjoy seeing."

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


let outcomeIndex = 1;

  function addOutcome() {
    const container = document.getElementById('outcomesContainer');

    const block = document.createElement('div');
    block.className = 'outcome-block';

    block.innerHTML = `
      <div class="outcome-row">
        <input
          type="text"
          name="outcomes[${outcomeIndex}][category]"
          placeholder="Outcome / Category name"
          required
        >
        <button type="button" class="remove-btn" onclick="removeOutcome(this)">Remove</button>
      </div>

      <textarea
        name="outcomes[${outcomeIndex}][traits]"
        rows="3"
        placeholder="Traits associated with this category"
        required
      ></textarea>
    `;

    container.appendChild(block);
    outcomeIndex++;
  }

  function removeOutcome(button) {
    const container = document.getElementById('outcomesContainer');
    if (container.children.length > 1) {
      button.closest('.outcome-block').remove();
    }
  }

  function getOutcomeString() {
    const outcomeBlocks = document.querySelectorAll('.outcome-block');
    let result = [];

    outcomeBlocks.forEach(block => {
      const category = block.querySelector('input[type="text"]').value.trim();
      const traits = block.querySelector('textarea').value.trim();

      if (category && traits) {
        result.push(`${category}: ${traits}`);
      }
    });

    return result.join(' | ');
  }
