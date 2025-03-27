// src/FAQ.js
import React from 'react';
import styled from 'styled-components';

const FAQContainer = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  max-width: 800px;
  width: 90%;
`;

const FAQTitle = styled.h2`
  color: #1a76d2;
  margin-bottom: 1.5rem;
`;

const FAQItem = styled.div`
  margin-bottom: 1.5rem;
`;

const Question = styled.h3`
  color: #333;
  margin-bottom: 0.5rem;
`;

const Answer = styled.p`
  color: #666;
  line-height: 1.5;
`;

const FAQ = () => {
  return (
    <FAQContainer>
      <FAQTitle>Frequently Asked Questions (FAQ)</FAQTitle>
      
      <FAQItem>
        <Question>What is Flagle?</Question>
        <Answer>
          Flagle is a daily flag guessing game inspired by Wordle. Each day, all players get the same flag puzzle to solve. The goal is to identify the country that the flag belongs to within 6 attempts.
        </Answer>
      </FAQItem>

      <FAQItem>
        <Question>How do I play Flagle?</Question>
        <Answer>
          1. Type a country name to make your guess
          2. Each incorrect guess reveals a new piece of the flag
          3. You'll see the distance and direction to the target country after each guess
          4. Try to guess the correct country within 6 attempts
        </Answer>
      </FAQItem>

      <FAQItem>
        <Question>What do the hints mean?</Question>
        <Answer>
          After each guess, you get two types of hints:
          • Distance: Shows how far your guessed country is from the target country
          • Direction: The arrow shows which direction to go from your guess to reach the target country
        </Answer>
      </FAQItem>
    </FAQContainer>
  );
};

export default FAQ;