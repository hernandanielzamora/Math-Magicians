import React, { useEffect, useState } from 'react';

const Quotes = () => {
  const [quotes, setQuotes] = useState([]);
  const [load, setLoading] = useState([true]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getQuotes = async () => {
      const apiUrl = 'https://api.api-ninjas.com/v1/quotes?category=knowledge';
      const headers = { 'X-Api-Key': 'qLEoA1iKHEcmJLdQqPna7w==Ku70prCtVRjqrMLz' };

      try {
        const res = await fetch(apiUrl, { headers });
        if (!res.ok) {
          throw new Error('There´s an error with the response.');
        }
        const data = await res.json();
        setQuotes(data[0]);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    getQuotes();
  }, [setQuotes, setLoading, setError]);

  if (load) {
    return (
      <div className="loading-div">Generating quote...</div>
    );
  }

  if (error) {
    return (
      <div className="error-div">
        <h4>
          An error has happened:
          {error}
        </h4>
      </div>
    );
  }

  return (
    <div className="quote-container">
      <h2 className="quote">
        Quote for today:
        <b>
          {quotes.quote}
        </b>
      </h2>
      <h3 className="author">
        By:
        <b>
          {quotes.author}
        </b>
      </h3>
    </div>
  );
};

export default Quotes;
