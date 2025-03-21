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
  
  .quote-card p {
    margin: 0;
    font-style: italic;
    color: #e6e6e6;
  }
  
  /* Author attribution styling */
  .quote-card::after {
    content: attr(data-author);
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
  // Add data-author attributes to quotes for the CSS styling
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
        // Use em dash for attribution and add formatting
        item.setAttribute('data-author', '— ' + authorMatch);
        
        // Format the quote properly
        if (quoteText) {
          // Preserve any prefixes like "(Also known as...)"
          if (quoteText.startsWith('(') && !quoteText.startsWith('("')) {
            const closingParenIndex = quoteText.indexOf(')');
            const prefix = quoteText.substring(0, closingParenIndex + 1).trim();
            const actualQuote = quoteText.substring(closingParenIndex + 1).trim();
            
            // Make sure we're not adding redundant quotes
            const formattedQuote = actualQuote.startsWith('"') && actualQuote.endsWith('"') 
              ? actualQuote 
              : `"${actualQuote.replace(/^"/, '').replace(/"$/, '')}"`;
              
            item.innerHTML = `${prefix} ${formattedQuote}`;
          } else {
            // Normal quotes without prefix
            const formattedQuote = quoteText.startsWith('"') && quoteText.endsWith('"') 
              ? quoteText 
              : `"${quoteText.replace(/^"/, '').replace(/"$/, '')}"`;
              
            item.innerHTML = formattedQuote;
          }
        }
      }
    });
  });
</script>

<div class="quote-container">
  <div class="quote-card">"What I would like to have is that we be blessed with a divine discontent. Always not quite satisfied with what we have, always driven to do better." (Lee Hsien Loong)</div>

  <div class="quote-card">"And still, after all this time,
  The sun never says to the earth,
  "You owe Me."
  Look what happens with
  A love like that,
  It lights the Whole Sky." (Hafiz)</div>

  <div class="quote-card">"The best writing is rewriting." (E. B. White)</div>

  <div class="quote-card">"Programs must be written for people to read, and only incidentally for machines to execute." (Abelson & Sussman)</div>

  <div class="quote-card">"I have made this longer than usual because I have not had time to make it shorter." (Blaise Pascal)</div>

  <div class="quote-card">"There are no gods in the universe, no nations, no money, no human rights, no laws, and no justice outside the common imagination of human beings." (Yuval Noah Harari)</div>

  <div class="quote-card">"There is no God, but don't tell that to my servant, lest he murder me at night" (Voltaire)</div>

  <div class="quote-card">"Whenever you find yourself on the side of the majority, it is time to pause and reflect." (Mark Twain)</div>

  <div class="quote-card">"I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel." (Maya Angelou)</div>

  <div class="quote-card">"If you tell the truth, you don't have to remember anything." (Mark Twain)</div>

  <div class="quote-card">"It is the mark of an educated mind to be able to entertain a thought without accepting it." (Aristotle)</div>

  <div class="quote-card">"When you are totally at peace with yourself, nothing can shake you." (Deepam Chatterjee)</div>

  <div class="quote-card">"I love you the more in that I believe you had liked me for my own sake and for nothing else." (John Keats)</div>

  <div class="quote-card">"Not all those who wander are lost." (J.R.R Tolkien)</div>

  <div class="quote-card">"It was awful-tasting medicine, but I guess the patient needed it. Sometimes life hits you in the head with a brick. Don't lose faith. I'm convinced that the only thing that kept me going was that I loved what I did." (Steve Jobs)</div>

  <div class="quote-card">"The golden rule is a good standard which is further improved by doing unto others, wherever reasonable, as they want to be done by." (Karl Popper)</div>

  <div class="quote-card">"Hello, solitude. How are you today? Come, sit with me, and I will care for you." (Thich Nhat Hanh)</div>

  <div class="quote-card">"Put your hand on a hot stove for a minute and it seems like an hour. Sit with a pretty girl for an hour, and it seems like a minute. That is relativity." (Albert Einstein)</div>

  <div class="quote-card">"A happy man is too satisfied with the present to dwell on the future." (Albert Einstein)</div>

  <div class="quote-card">"We act as though comfort and luxury were the chief requirements of life, when all that we need to make us happy is something to be enthusiastic about." (Charles Kingsley)</div>

  <div class="quote-card">"Keep away from people who try to belittle your ambitions. Small people always do that, but the really great make you feel that you, too, can become great." (Mark Twain)</div>

  <div class="quote-card">"Any word you have to hunt for in a thesaurus is the wrong word." (Stephen King)</div>

  <div class="quote-card">"A new scientific truth does not triumph by convincing its opponents and making them see the light, but rather because its opponents eventually die, and a new generation grows up that is familiar with it." (Max Planck)</div>

  <div class="quote-card">"No man who ever held the office of President would congratulate a friend on obtaining it." (John Adams)</div>

  <div class="quote-card">"The best way to do something 'lean' is to gather a tight group of people, give them very little money, and very little time." (Bob Klein, Chief Engineer of the F-14 program)</div>

  <div class="quote-card">"He begins working calculus problems in his head as soon as he awakens. He did calculus while driving in his car, while sitting in the living room, and while lying in bed at night." (divorce complaint of Richard Feynman's second wife)</div>

  <div class="quote-card">"The amount of energy necessary to refute bullshit is an order of magnitude bigger than to produce it." (Paul Kedrosky)</div>

  <div class="quote-card">(Also known as Hanlon's razor) "Never attribute to malice that which is adequately explained by stupidity" (Robert J. Hanlon)</div>

  <div class="quote-card">(Also known as Hitchen's razor) "What can be asserted without evidence can be dismissed without evidence" (Christopher Hitchens)</div>

  <div class="quote-card">"Extraordinary claims require extraordinary evidence" (Carl Sagan)</div>

  <div class="quote-card">"Being enthusiastic is worth 25 IQ points" (Kevin Kelly)</div>

  <div class="quote-card">"The purpose of a habit is to remove that action from self-negotiation. You no longer expend energy deciding whether to do it. You just do it. Good habits can range from telling the truth, to flossing." (Kevin Kelly)</div>

  <div class="quote-card">"Be prepared: When you are 90% done any large project (a house, a film, an event, an app) the rest of the myriad details will take a second 90% to complete." (Kevin Kelly)</div>

  <div class="quote-card">"You can talk to someone a hundred years from now when they read your writing" (Neil deGrasse Tyson)</div>

  <div class="quote-card">"You need to over prepare by a factor of 10 to make it look like you did not prepare at all" (Neil deGrasse Tyson)</div>

  <div class="quote-card">"It's not enough to be right, you have to be effective" (Cyril deGrasse Tyson)</div>

  <div class="quote-card">"Tactics is knowing what to do when there is something to do. Strategy is knowing what to do when there is nothing to do." (Savielly Tartakower)</div>

  <div class="quote-card">"There are three deaths. The first is when the body ceases to function. The second is when the body is consigned to the grave. The third is that moment, sometime in the future, when your name is spoken for the last time." (David M. Eagleman)</div>

  <div class="quote-card">"You measure yourself by the people who measure themselves by you" (Carter Chambers)</div>

  <div class="quote-card">"No morality can be founded on authority, even if the authority were divine" (A. J. Ayer)</div>

  <div class="quote-card">"Strange how paranoia can link up with reality now and then" (Philip K. Dick)</div>

  <div class="quote-card">"Between stimulus and response there is a space. In that space is our power to choose our response. In our response lies our growth and our freedom." (Viktor E. Frankl)</div>

  <div class="quote-card">"Though we travel the world over to find the beautiful, we must carry it with us, or we find it not." (Ralph Waldo Emerson)</div>

  <div class="quote-card">"I was born here. I had the audacity of equality" (Hasan Minhaj)</div>

  <div class="quote-card">"Reality has a well known liberal bias" (Stephen Colbert)</div>

  <div class="quote-card">"All of humanity's problems stem from man's inability to sit quietly in a room alone" (Blaise Pascal)</div>

  <div class="quote-card">"If two people always agree on everything, then one of them is dispensable" (Winston Churchill)</div>

  <div class="quote-card">"Programming isn't about what you know; it's about what you can figure out." (Chris Pine)</div>

  <div class="quote-card">"Train employees well enough they could get another job, but treat them well enough so they never want to" (Kevin Kelly)</div>

  <div class="quote-card">"You can reduce the annoyance of someone's stupid belief by increasing your understanding of why they believe it" (Kevin Kelly)</div>
</div>
