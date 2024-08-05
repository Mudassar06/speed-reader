import React from 'react';

const commonWords = [
  "the", "be", "to", "of", "and", "a", "an", "it", "at", "on", "he", "she", "but", "is", "my"
];

const defaultAlgorithm = "- 0 1 1 2 0.4";
const defaultHighlightStyle = { fontWeight: 900 };
const defaultRestStyle = { opacity: 0.9 };

const parseAlgorithm = (algorithm) => {
  try {
    const res = { exclude: true, sizes: [], restRatio: 0.4 };
    const parts = algorithm.split(' ');

    if (parts[0] === '+') {
      res.exclude = false;
    }

    res.restRatio = Number(parts[parts.length - 1]);

    for (let i = 1; i < parts.length - 1; i++) {
      res.sizes.push(Number(parts[i]));
    }

    return res;
  } catch {
    return { exclude: true, sizes: [1, 1, 2], restRatio: 0.4 };
  }
};

const algorithm = parseAlgorithm(defaultAlgorithm);

const isCommonWord = (word) => commonWords.includes(word.toLowerCase());

const bionifyWord = (word) => {
  if (algorithm.exclude && word.length <= 3 && isCommonWord(word)) {
    return word;
  }

  let numBold;
  if (word.length <= algorithm.sizes.length) {
    numBold = algorithm.sizes[word.length - 1];
  } else {
    numBold = Math.ceil(word.length * algorithm.restRatio);
  }

  return (
    <span>
      <span style={defaultHighlightStyle}>{word.slice(0, numBold)}</span>
      <span style={defaultRestStyle}>{word.slice(numBold)}</span>
    </span>
  );
};

const TextBox = ({ word, bnfy }) => {
  return (
    <div className="textbox">
      <span className="word">{bnfy ? bionifyWord(word) : word}</span>
    </div>
  );
}

export default TextBox;