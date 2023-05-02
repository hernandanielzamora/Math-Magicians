import React, { useEffect, useState } from 'react';
import styles from '../styles/Quotes.module.css';

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
      <div className={styles.loadingdiv}>Generating quote...</div>
    );
  }

  if (error) {
    return (
      <div className={styles.errordiv}>
        <h4>
          An error has happened:
          {error}
        </h4>
      </div>
    );
  }

  const quoteStyle = {
    padding: '20px 0',
    lineHeight: '1.5em',
    color: 'rgb(78, 35, 35)',
    textAlign: 'center',
    fontWeight: '500',
    marginLeft: '1%',
  };

  return (
    <div className={styles.quotecontainer}>
      <h2 className={styles.quote}>
        Quote for today:
        <b style={quoteStyle}>
          {quotes.quote}
        </b>
      </h2>
      <h3 className={styles.author}>
        By:
        <b style={quoteStyle}>
          {quotes.author}
        </b>
      </h3>
    </div>
  );
};

export default Quotes;
