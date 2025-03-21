---
layout: page
title: Quotes
permalink: /quotes/
description: "A collection of inspiring and thought-provoking quotes curated by Harsh Gadodia from figures including Einstein, Twain, Jobs, and others on life, technology, and wisdom."
---

<style>
  /* Quote card styling */
  .quote-container {
    padding-left: 0;
  }
  
  .quote-card {
    background-color: #2a2a2a;
    border-left: 3px solid #5a5af0;
    border-radius: 4px;
    margin-bottom: 20px;
    padding: 15px 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
    position: relative;
  }
  
  .quote-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  }
  
  .quote-text {
    margin: 0;
    font-style: italic;
    color: #e6e6e6;
  }
  
  /* Author attribution styling */
  .quote-author {
    display: block;
    text-align: right;
    font-style: italic;
    font-size: 0.9em;
    margin-top: 12px;
    color: #a3a3a3;
    position: relative;
    padding-top: 8px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
</style>

<script>
  // Format quotes and extract authors
  document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.quote-card');
    items.forEach(item => {
      const text = item.textContent.trim();
      
      // Handle different quote patterns
      // Pattern 1: Normal quotes ending with (Author)
      // Pattern 2: Quotes with prefix like "(Also known as...)" at the beginning
      let authorMatch;
      let quoteText;
      
      if (text.endsWith(')')) {
        // Find the last opening parenthesis that matches the final closing one
        const lastOpenParenIndex = text.lastIndexOf('(');
        if (lastOpenParenIndex !== -1) {
          authorMatch = text.substring(lastOpenParenIndex + 1, text.length - 1).trim();
          quoteText = text.substring(0, lastOpenParenIndex).trim();
        }
      }
      
      // Special case for quotes that start with a prefix like "(Also known as...)"
      if (text.startsWith('(') && !text.startsWith('("')) {
        const closingParenIndex = text.indexOf(')');
        const openQuoteIndex = text.indexOf('"', closingParenIndex);
        
        if (closingParenIndex !== -1 && openQuoteIndex !== -1) {
          const prefix = text.substring(0, closingParenIndex + 1).trim();
          
          // Find the last occurrence of (Author) at the end
          const remainingText = text.substring(closingParenIndex + 1).trim();
          const lastOpenParenIndex = remainingText.lastIndexOf('(');
          
          if (lastOpenParenIndex !== -1) {
            authorMatch = remainingText.substring(lastOpenParenIndex + 1, remainingText.length - 1).trim();
            quoteText = prefix + " " + remainingText.substring(0, lastOpenParenIndex).trim();
          }
        }
      }
      
      if (authorMatch) {
        // Format the quote and author
        if (quoteText) {
          let formattedQuote = '';
          let formattedAuthor = '— ' + authorMatch;
          
          // Preserve any prefixes like "(Also known as...)"
          if (quoteText.startsWith('(') && !quoteText.startsWith('("')) {
            const closingParenIndex = quoteText.indexOf(')');
            const prefix = quoteText.substring(0, closingParenIndex + 1).trim();
            const actualQuote = quoteText.substring(closingParenIndex + 1).trim();
            
            // Make sure we're not adding redundant quotes
            formattedQuote = actualQuote.startsWith('"') && actualQuote.endsWith('"') 
              ? actualQuote 
              : `"${actualQuote.replace(/^"/, '').replace(/"$/, '')}"`;
              
            formattedQuote = `${prefix} ${formattedQuote}`;
          } else {
            // Normal quotes without prefix
            formattedQuote = quoteText.startsWith('"') && quoteText.endsWith('"') 
              ? quoteText 
              : `"${quoteText.replace(/^"/, '').replace(/"$/, '')}"`;
          }
          
          // Create the quote and author elements
          item.innerHTML = `<div class="quote-text">${formattedQuote}</div><div class="quote-author">${formattedAuthor}</div>`;
        }
      }
    });
  });
</script>

<div class="quote-container">
  <div class="quote-card">
    <div class="quote-text">"What I would like to have is that we be blessed with a divine discontent. Always not quite satisfied with what we have, always driven to do better."</div>
    <div class="quote-author">— Lee Hsien Loong</div>
  </div>

  <div class="quote-card">
    <div class="quote-text">"And still, after all this time,
    The sun never says to the earth,
    "You owe Me."
    Look what happens with
    A love like that,
    It lights the Whole Sky."</div>
    <div class="quote-author">— Hafiz</div>
  </div>

  <div class="quote-card">
    <div class="quote-text">"The best writing is rewriting."</div>
    <div class="quote-author">— E. B. White</div>
  </div>

  <div class="quote-card">
    <div class="quote-text">"Programs must be written for people to read, and only incidentally for machines to execute."</div>
    <div class="quote-author">— Abelson & Sussman</div>
  </div>

  <div class="quote-card">
    <div class="quote-text">"I have made this longer than usual because I have not had time to make it shorter."</div>
    <div class="quote-author">— Blaise Pascal</div>
  </div>

  <div class="quote-card">
    <div class="quote-text">"There are no gods in the universe, no nations, no money, no human rights, no laws, and no justice outside the common imagination of human beings."</div>
    <div class="quote-author">— Yuval Noah Harari</div>
  </div>

  <div class="quote-card">
    <div class="quote-text">"There is no God, but don't tell that to my servant, lest he murder me at night"</div>
    <div class="quote-author">— Voltaire</div>
  </div>

  <div class="quote-card">
    <div class="quote-text">"Whenever you find yourself on the side of the majority, it is time to pause and reflect."</div>
    <div class="quote-author">— Mark Twain</div>
  </div>

  <div class="quote-card">
    <div class="quote-text">"I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel."</div>
    <div class="quote-author">— Maya Angelou</div>
  </div>

  <div class="quote-card">
    <div class="quote-text">"If you tell the truth, you don't have to remember anything."</div>
    <div class="quote-author">— Mark Twain</div>
  </div>

  <div class="quote-card">
    <div class="quote-text">"It is the mark of an educated mind to be able to entertain a thought without accepting it."</div>
    <div class="quote-author">— Aristotle</div>
  </div>

  <div class="quote-card">
    <div class="quote-text">"When you are totally at peace with yourself, nothing can shake you."</div>
    <div class="quote-author">— Deepam Chatterjee</div>
  </div>

  <div class="quote-card">
    <div class="quote-text">"I love you the more in that I believe you had liked me for my own sake and for nothing else."</div>
    <div class="quote-author">— John Keats</div>
  </div>

  <div class="quote-card">
    <div class="quote-text">"Not all those who wander are lost."</div>
    <div class="quote-author">— J.R.R Tolkien</div>
  </div>

  <div class="quote-card">
    <div class="quote-text">"It was awful-tasting medicine, but I guess the patient needed it. Sometimes life hits you in the head with a brick. Don't lose faith. I'm convinced that the only thing that kept me going was that I loved what I did."</div>
    <div class="quote-author">— Steve Jobs</div>
  </div>

  <div class="quote-card">
    <div class="quote-text">"The golden rule is a good standard which is further improved by doing unto others, wherever reasonable, as they want to be done by."</div>
    <div class="quote-author">— Karl Popper</div>
  </div>

  <div class="quote-card">
    <div class="quote-text">"Hello, solitude. How are you today? Come, sit with me, and I will care for you."</div>
    <div class="quote-author">— Thich Nhat Hanh</div>
  </div>

  <div class="quote-card">
    <div class="quote-text">"Put your hand on a hot stove for a minute and it seems like an hour. Sit with a pretty girl for an hour, and it seems like a minute. That is relativity."</div>
    <div class="quote-author">— Albert Einstein</div>
  </div>

  <div class="quote-card">
    <div class="quote-text">"A happy man is too satisfied with the present to dwell on the future."</div>
    <div class="quote-author">— Albert Einstein</div>
  </div>

  <div class="quote-card">
    <div class="quote-text">"We act as though comfort and luxury were the chief requirements of life, when all that we need to make us happy is something to be enthusiastic about."</div>
    <div class="quote-author">— Charles Kingsley</div>
  </div>

  <div class="quote-card">
    <div class="quote-text">"Keep away from people who try to belittle your ambitions. Small people always do that, but the really great make you feel that you, too, can become great."</div>
    <div class="quote-author">— Mark Twain</div>
  </div>

  <div class="quote-card">
    <div class="quote-text">"Any word you have to hunt for in a thesaurus is the wrong word."</div>
    <div class="quote-author">— Stephen King</div>
  </div>

  <div class="quote-card">
    <div class="quote-text">"A new scientific truth does not triumph by convincing its opponents and making them see the light, but rather because its opponents eventually die, and a new generation grows up that is familiar with it."</div>
    <div class="quote-author">— Max Planck</div>
  </div>

  <div class="quote-card">
    <div class="quote-text">"No man who ever held the office of President would congratulate a friend on obtaining it."</div>
    <div class="quote-author">— John Adams</div>
  </div>

  <div class="quote-card">
    <div class="quote-text">"The best way to do something 'lean' is to gather a tight group of people, give them very little money, and very little time."</div>
    <div class="quote-author">— Bob Klein, Chief Engineer of the F-14 program</div>
  </div>

  <div class="quote-card">
    <div class="quote-text">"He begins working calculus problems in his head as soon as he awakens. He did calculus while driving in his car, while sitting in the living room, and while lying in bed at night."</div>
    <div class="quote-author">— divorce complaint of Richard Feynman's second wife</div>
  </div>

  <div class="quote-card">
    <div class="quote-text">"The amount of energy necessary to refute bullshit is an order of magnitude bigger than to produce it."</div>
    <div class="quote-author">— Paul Kedrosky</div>
  </div>

  <div class="quote-card">
    <div class="quote-text">(Also known as Hanlon's razor) "Never attribute to malice that which is adequately explained by stupidity"</div>
    <div class="quote-author">— Robert J. Hanlon</div>
  </div>

  <div class="quote-card">
    <div class="quote-text">(Also known as Hitchen's razor) "What can be asserted without evidence can be dismissed without evidence"</div>
    <div class="quote-author">— Christopher Hitchens</div>
  </div>

  <div class="quote-card">
    <div class="quote-text">"Extraordinary claims require extraordinary evidence"</div>
    <div class="quote-author">— Carl Sagan</div>
  </div>

  <div class="quote-card">
    <div class="quote-text">"Being enthusiastic is worth 25 IQ points"</div>
    <div class="quote-author">— Kevin Kelly</div>
  </div>

  <div class="quote-card">
    <div class="quote-text">"The purpose of a habit is to remove that action from self-negotiation. You no longer expend energy deciding whether to do it. You just do it. Good habits can range from telling the truth, to flossing."</div>
    <div class="quote-author">— Kevin Kelly</div>
  </div>

  <div class="quote-card">
    <div class="quote-text">"Be prepared: When you are 90% done any large project (a house, a film, an event, an app) the rest of the myriad details will take a second 90% to complete."</div>
    <div class="quote-author">— Kevin Kelly</div>
  </div>

  <div class="quote-card">
    <div class="quote-text">"You can talk to someone a hundred years from now when they read your writing"</div>
    <div class="quote-author">— Neil deGrasse Tyson</div>
  </div>

  <div class="quote-card">
    <div class="quote-text">"You need to over prepare by a factor of 10 to make it look like you did not prepare at all"</div>
    <div class="quote-author">— Neil deGrasse Tyson</div>
  </div>

  <div class="quote-card">
    <div class="quote-text">"It's not enough to be right, you have to be effective"</div>
    <div class="quote-author">— Cyril deGrasse Tyson</div>
  </div>

  <div class="quote-card">
    <div class="quote-text">"Tactics is knowing what to do when there is something to do. Strategy is knowing what to do when there is nothing to do."</div>
    <div class="quote-author">— Savielly Tartakower</div>
  </div>

  <div class="quote-card">
    <div class="quote-text">"There are three deaths. The first is when the body ceases to function. The second is when the body is consigned to the grave. The third is that moment, sometime in the future, when your name is spoken for the last time."</div>
    <div class="quote-author">— David M. Eagleman</div>
  </div>

  <div class="quote-card">
    <div class="quote-text">"You measure yourself by the people who measure themselves by you"</div>
    <div class="quote-author">— Carter Chambers</div>
  </div>

  <div class="quote-card">
    <div class="quote-text">"No morality can be founded on authority, even if the authority were divine"</div>
    <div class="quote-author">— A. J. Ayer</div>
  </div>

  <div class="quote-card">
    <div class="quote-text">"Strange how paranoia can link up with reality now and then"</div>
    <div class="quote-author">— Philip K. Dick</div>
  </div>

  <div class="quote-card">
    <div class="quote-text">"Between stimulus and response there is a space. In that space is our power to choose our response. In our response lies our growth and our freedom."</div>
    <div class="quote-author">— Viktor E. Frankl</div>
  </div>

  <div class="quote-card">
    <div class="quote-text">"Though we travel the world over to find the beautiful, we must carry it with us, or we find it not."</div>
    <div class="quote-author">— Ralph Waldo Emerson</div>
  </div>

  <div class="quote-card">
    <div class="quote-text">"I was born here. I had the audacity of equality"</div>
    <div class="quote-author">— Hasan Minhaj</div>
  </div>

  <div class="quote-card">
    <div class="quote-text">"Reality has a well known liberal bias"</div>
    <div class="quote-author">— Stephen Colbert</div>
  </div>

  <div class="quote-card">
    <div class="quote-text">"All of humanity's problems stem from man's inability to sit quietly in a room alone"</div>
    <div class="quote-author">— Blaise Pascal</div>
  </div>

  <div class="quote-card">
    <div class="quote-text">"If two people always agree on everything, then one of them is dispensable"</div>
    <div class="quote-author">— Winston Churchill</div>
  </div>

  <div class="quote-card">
    <div class="quote-text">"Programming isn't about what you know; it's about what you can figure out."</div>
    <div class="quote-author">— Chris Pine</div>
  </div>

  <div class="quote-card">
    <div class="quote-text">"Train employees well enough they could get another job, but treat them well enough so they never want to"</div>
    <div class="quote-author">— Kevin Kelly</div>
  </div>

  <div class="quote-card">
    <div class="quote-text">"You can reduce the annoyance of someone's stupid belief by increasing your understanding of why they believe it"</div>
    <div class="quote-author">— Kevin Kelly</div>
  </div>
</div>
