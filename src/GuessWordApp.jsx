import React, { useEffect, useState } from 'react'
import './GuessWordApp.css'

export const GuessWordApp = () => {
    const [randomWord, setRandomWord] = useState('')
    const [shuffledWord, setShuffledWord] = useState('')
    const [inputValue, setInputValue] = useState('');
    const [inputValue2, setInputValue2] = useState('');
    const [inputValue3, setInputValue3] = useState('');
    const [inputValue4, setInputValue4] = useState('');
    const [inputValue5, setInputValue5] = useState('');
    const [inputValue6, setInputValue6] = useState('');
    const [inputError, setInputError] = useState(false);
    const [inputError2, setInputError2] = useState(false);
    const [inputError3, setInputError3] = useState(false);
    const [inputError4, setInputError4] = useState(false);
    const [inputError5, setInputError5] = useState(false);
    const [inputError6, setInputError6] = useState(false);
    const [answerArray, setAnswerArray] = useState(['', '', '', '', '', ''])
    const [tries, setTries] = useState(5);
    const [mistakes, setMistakes] = useState([]);

    const handleInputChange = (e) => {
        const { value } = e.target;
        setInputValue(value);
        if (value !== '') {
            setAnswerArray((prevArray) => {
                const newArray = [...prevArray];
                newArray[0] = value;
                return newArray;
            });
        }
        console.log(answerArray);
    }
    useEffect(() => {
        if (answerArray[0] !== '') {
            const correctArray = randomWord.split('');
            if (answerArray[0] !== correctArray[0]) {
                setTries((prevTries) => prevTries - 1);
                setMistakes((prevMistakes) => [...prevMistakes, answerArray[0]]);
                setInputError(true);
                const timer = setTimeout(() => {
                    setInputError(false);
                }, 300);
                return () => clearTimeout(timer);
            }
        }
    }, [answerArray[0]])
    const handleInputChange2 = (e) => {
        const { value } = e.target;
        setInputValue2(value);
        if (value !== '') {
            setAnswerArray((prevArray) => {
                const newArray = [...prevArray];
                newArray[1] = value;
                return newArray;
            });
        }
        console.log(answerArray);
    }
    useEffect(() => {
        if (answerArray[1] !== '') {
            const correctArray = randomWord.split('');
            if (answerArray[1] !== correctArray[1]) {
                setTries((prevTries) => prevTries - 1);
                setMistakes((prevMistakes) => [...prevMistakes, answerArray[1]]);
                setInputError2(true);
                const timer = setTimeout(() => {
                    setInputError2(false);
                }, 300);
                return () => clearTimeout(timer);
            }
        }
    }, [answerArray[1]])
    const handleInputChange3 = (e) => {
        const { value } = e.target;
        setInputValue3(value);
        if (value !== '') {
            setAnswerArray((prevArray) => {
                const newArray = [...prevArray];
                newArray[2] = value;
                return newArray;
            });
        }
        console.log(answerArray);
    }
    useEffect(() => {
        if (answerArray[2] !== '') {
            const correctArray = randomWord.split('');
            if (answerArray[2] !== correctArray[2]) {
                setTries((prevTries) => prevTries - 1);
                setMistakes((prevMistakes) => [...prevMistakes, answerArray[2]]);
                setInputError3(true);
                const timer = setTimeout(() => {
                    setInputError3(false);
                }, 300);
                return () => clearTimeout(timer);
            }
        }
    }, [answerArray[2]])
    const handleInputChange4 = (e) => {
        const { value } = e.target;
        setInputValue4(value);
        if (value !== '') {
            setAnswerArray((prevArray) => {
                const newArray = [...prevArray];
                newArray[3] = value;
                return newArray;
            });
        }
        console.log(answerArray);
    }
    useEffect(() => {
        if (answerArray[3] !== '') {
            const correctArray = randomWord.split('');
            if (answerArray[3] !== correctArray[3]) {
                setTries((prevTries) => prevTries - 1);
                setMistakes((prevMistakes) => [...prevMistakes, answerArray[3]]);
                setInputError4(true);
                const timer = setTimeout(() => {
                    setInputError4(false);
                }, 300);
                return () => clearTimeout(timer);
            }
        }
    }, [answerArray[3]])
    const handleInputChange5 = (e) => {
        const { value } = e.target;
        setInputValue5(value);
        if (value !== '') {
            setAnswerArray((prevArray) => {
                const newArray = [...prevArray];
                newArray[4] = value;
                return newArray;
            });
        }
        console.log(answerArray);
    }
    useEffect(() => {
        if (answerArray[4] !== '') {
            const correctArray = randomWord.split('');
            if (answerArray[4] !== correctArray[4]) {
                setTries((prevTries) => prevTries - 1);
                setMistakes((prevMistakes) => [...prevMistakes, answerArray[4]]);
                setInputError5(true);
                const timer = setTimeout(() => {
                    setInputError5(false);
                }, 300);
                return () => clearTimeout(timer);
            }
        }
    }, [answerArray[4]])
    const handleInputChange6 = (e) => {
        const { value } = e.target;
        setInputValue6(value);
        if (value !== '') {
            setAnswerArray((prevArray) => {
                const newArray = [...prevArray];
                newArray[5] = value;
                return newArray;
            });
        }
        console.log(answerArray);
    }
    useEffect(() => {
        if (answerArray[5] !== '') {
            const correctArray = randomWord.split('');
            if (answerArray[5] !== correctArray[5]) {
                setTries((prevTries) => prevTries - 1);
                setMistakes((prevMistakes) => [...prevMistakes, answerArray[5]]);
                setInputError6(true);
                const timer = setTimeout(() => {
                    setInputError6(false);
                }, 300);
                return () => clearTimeout(timer);
            }
        }
    }, [answerArray[5]])

    const wordRandomizer = async () => {
        try {
            const response = await fetch('https://random-word-api.herokuapp.com/word?length=6');
            const result = await response.json();
            console.log(result[0].split(''))
            setRandomWord(result[0]);
        } catch (error) {
            console.error(error);
        }
    }

    const shuffleWord = (word) => {
        let letters = word.split('');
        for (let i = letters.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [letters[i], letters[j]] = [letters[j], letters[i]];
        }
        setShuffledWord(letters.join(''));
    };

    useEffect(() => {
        wordRandomizer();
    }, [])

    useEffect(() => {
        shuffleWord(randomWord);
    }, [randomWord]);


    return (
        <main>
            <h1>Word Scramblle</h1>
            <div className={`container-shuffled ${tries === 0 ? 'container-error' : ''} ${answerArray.join('') === randomWord ? 'container-correct' : ''}`}>
                <p className='shuffled-word'>{shuffledWord}</p>
            </div>
            <div className='container-tr-mstk' >
                <div className='container-tries'>
                    <p>Tries ({tries}/5)</p>
                    <div className={`triesCircles ${tries < 1 ? 'triesCircles-empty' : ''}`}></div>
                    <div className={`triesCircles ${tries < 2 ? 'triesCircles-empty' : ''}`}></div>
                    <div className={`triesCircles ${tries < 3 ? 'triesCircles-empty' : ''}`}></div>
                    <div className={`triesCircles ${tries < 4 ? 'triesCircles-empty' : ''}`}></div>
                    <div className={`triesCircles ${tries < 5 ? 'triesCircles-empty' : ''}`}></div>
                </div>
                <p>Mistakes: <span>{mistakes.join(', ')}</span></p>
            </div>
            <div className='container-input'>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    maxLength={1}
                    disabled={tries === 0 && true || answerArray.join('') === randomWord && true}
                    className={inputError ? 'input-error' : ''} />
                <input
                    type="text"
                    value={inputValue2}
                    onChange={handleInputChange2}
                    maxLength={1}
                    disabled={tries === 0 && true || answerArray.join('') === randomWord && true}
                    className={inputError2 ? 'input-error' : ''} />
                <input
                    type="text"
                    value={inputValue3}
                    onChange={handleInputChange3}
                    maxLength={1}
                    disabled={tries === 0 && true || answerArray.join('') === randomWord && true}
                    className={inputError3 ? 'input-error' : ''} />
                <input
                    type="text"
                    value={inputValue4}
                    onChange={handleInputChange4}
                    maxLength={1}
                    disabled={tries === 0 && true || answerArray.join('') === randomWord && true}
                    className={inputError4 ? 'input-error' : ''} />
                <input
                    type="text"
                    value={inputValue5}
                    onChange={handleInputChange5}
                    maxLength={1}
                    disabled={tries === 0 && true || answerArray.join('') === randomWord && true}
                    className={inputError5 ? 'input-error' : ''} />
                <input
                    type="text"
                    value={inputValue6}
                    onChange={handleInputChange6}
                    maxLength={1}
                    disabled={tries === 0 && true || answerArray.join('') === randomWord && true}
                    className={inputError6 ? 'input-error' : ''} />
            </div>
            <div className='container-buttons'>
                <div className='button-shadow'>
                    <button onClick={() => {
                        location.reload();
                    }}>Random</button>
                </div>
                <div className='button-shadow'>
                    <button onClick={() => {
                        setInputValue('');
                        setInputValue2('');
                        setInputValue3('');
                        setInputValue4('');
                        setInputValue5('');
                        setInputValue6('');
                    }}>Reset</button>
                </div>
            </div>
        </main>
    )
}
