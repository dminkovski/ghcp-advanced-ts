'use client';

import CodeBlock from "@/components/code-block";

export default function Page() {
  return (
    <div>
      <h1 className="text-primary text-xl">Prompt Engineering</h1>
      <p>Using GitHub Copilot, you can drive the entire GitHub Copilot experience by using prompt Engineering.</p>
      
      <div className="prompt-sample">
        <h2 className="text-primary text-lg mt-5">General Prompting / Zero Shot</h2>
        <p className='mt-3 text-md font-bold'> Simplest type of prompt. Only provides a description of a task and some text.</p>
        <CodeBlock>{`Classify movie reviews as POSITIVE, NEUTRAL or NEGATIVE.
        Review: Her is a disturbing study revealing the direction humanity is headed if AI is allowed to keep evolving, unchecked.
        I wish there were more movies like this masterpiece. Sentiment:
        `}</CodeBlock>
      </div>

      <div className="prompt-sample">
        <h2 className="text-primary text-lg mt-5">One/Single Shot & few shot</h2>
        <p className='mt-3 text-md font-bold'> Provide examples which help the model to understand.</p>
        <CodeBlock>{`Parse a customer's pizza order into valid JSON.
        EXAMPLE:
        I want a small pizza with cheese, tomato sauce, and pepperoni.
        JSON Response:

        {
        "size": "small",
        "type": "normal",
        "ingredients": [["cheese", "tomato sauce", "peperoni"]]
        }`}</CodeBlock>
      </div>

      <div className="prompt-sample">
        <h2 className="text-primary text-lg mt-5">System Prompting</h2>
        <p className='mt-3 text-md font-bold'> Set the overall context and purpose. Define the {"\"big picture\""}.</p>
        <CodeBlock>{`Classify movie reviews as positive, neutral or negative. Only return the label in uppercase.
        Review: "Her" is a disturbing study revealing the direction
        humanity is headed if AI is allowed to keep evolving,
        unchecked. It's so disturbing I couldn't watch it.
        Sentiment:`}
        </CodeBlock>
      </div>

      <div className="prompt-sample">
        <h2 className="text-primary text-lg mt-5">Role Prompting</h2>
        <p className='mt-3 text-md font-bold'>Assign a specific role to the model.</p>
        <CodeBlock>{`I want you to act as a travel guide. I will write to you about my location and you will suggest 3 places to visit near me. 
        In some cases, I will also give you the type of places I will visit. 
        My suggestion: "I am in Amsterdam and I want to visit only museums."
        Travel Suggestions:`}
        </CodeBlock>
      </div>

      <div className="prompt-sample">
        <h2 className="text-primary text-lg mt-5">Contextual Prompting</h2>
        <p className='mt-3 text-md font-bold'>Provide an explicit context to the model.</p>
        <CodeBlock>{`Context: You are writing for a blog about retro 80's arcade video games.
        Suggest 3 topics to write an article about with a few lines of description of what this article should contain.`}
        </CodeBlock>
      </div>

      <div className="prompt-sample">
        <h2 className="text-primary text-lg mt-5">Step-back Prompting</h2>
        <p className='mt-3 text-md font-bold'>This technique improves the performance by first considering a question related to the specific task and feeding the answer into a subsequent prompt.</p>
        <CodeBlock>{`Based on popular first-person shooter action games, what are 5 fictional key settings that contribute to a challenging and engaging level storyline in a first-person shooter video game?`}
        </CodeBlock>
        <p className="mt-3 mb-3 font-italic">And then:</p>
        <CodeBlock>
          {`Context: 5 engaging themes for a first person shooter video game:
          1. **Abandoned Military Base**: A sprawling, post-apocalyptic military complex crawling with mutated soldiers and rogue robots, ideal for challenging firearm combat.
          2. **Cyberpunk City**: A neon-lit, futuristic urban environment with towering skyscrapers and dense alleyways, featuring cybernetically enhanced enemies and hacking mechanics.
          3. **Alien Spaceship**: A vast alien vessel stranded on Earth, with eerie corridors, zero-gravity sections, and extraterrestrial creatures to encounter.
          4. **Zombie-Infested Town**: A desolate town overrun by hordes of aggressive zombies, featuring intense close-quarters combat and puzzle-solving to find safe passage.
          5. **Underwater Research Facility**: A deep-sea laboratory flooded with water, filled with mutated aquatic creatures, and requiring stealth and underwater exploration skills to survive.
    
          Take one of the themes and write a one paragraph storyline for a new level of a first-person shooter video game that is challenging and engaging.`}
        </CodeBlock>
      </div>

      <div className="prompt-sample">
        <h2 className="text-primary text-lg mt-5">Chain of Thought (CoT)</h2>
        <p className='mt-3 text-md font-bold'>Improve the reasoning capability by generating intermediate reasoning steps.</p>
        <CodeBlock>{`When I was 3 years old, my partner was 3 times my age. Now, I am 20 years old. How old is my partner? Let's think step by step.`}
        </CodeBlock>
        <p className="mt-3 mb-3 font-italic">combined with Single-Shot:</p>
        <CodeBlock>{`
        Q: When my brother was 2 years old, I was double his age. Now I am 40 years old. How old is my brother? Let's think step by step.
        A: When my brother was 2 years, I was 2 * 2 = 4 years old.
        That's an age difference of 2 years and I am older. Now I am 40
        years old, so my brother is 40 - 2 = 38 years old. The answer is 38.
        Q: When I was 3 years old, my partner was 3 times my age. Now, I am 20 years old. How old is my partner? Let's think step by step. 
        A:`}
        </CodeBlock>
      </div>

      <div className="prompt-sample">
        <h2 className="text-primary text-lg mt-5">Automatic Prompt Engineering</h2>
        <p className='mt-3 text-md font-bold'>Ask the model to generate prompts.</p>
        <CodeBlock>{`We have a band merchandise t-shirt webshop, and to train a chatbot we need various ways to order: "One Metallica t-shirt size S". 
        Generate 10 variants, with the same semantics but keep the same meaning.`}
        </CodeBlock>
      </div>

    </div>
  );
}
