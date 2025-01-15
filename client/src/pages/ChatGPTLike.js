import React, { useState } from 'react';

function ChatGPTLike() {
  const [userInput, setUserInput] = useState('');
  const [chatResponse, setChatResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // For now, we use a mock endpoint. Update with real AI service as needed.
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: userInput })
    });
    const data = await response.json();
    setChatResponse(data.answer);
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>ChatGPT-Like Assistant</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Ask me anything..."
          style={{ width: '400px', marginRight: '1rem' }}
        />
        <button type="submit">Send</button>
      </form>
      <div style={{ marginTop: '1rem' }}>
        <strong>Response:</strong> {chatResponse}
      </div>
    </div>
  );
}

export default ChatGPTLike;
