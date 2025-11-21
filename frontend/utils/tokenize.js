// tokenize.js
// ---------------------------------------
// Converts a message string + token metadata into a renderable token array.
// Example:
// Input text: "Hello @JohnDoe how are you?"
// Token map example:
// [
//   { id: "1", label: "JohnDoe", start: 6, end: 14 }
// ]
// Output render structure:
// [
//   "Hello ",
//   { type: "token", id: "1", label: "JohnDoe" },
//   " how are you?"
// ]
// ---------------------------------------

export function applyTokensToText(text, tokens) {
    if (!tokens || tokens.length === 0) return [text];
  
    const sortedTokens = [...tokens].sort((a, b) => a.start - b.start);
  
    const result = [];
    let currentIndex = 0;
  
    for (const token of sortedTokens) {
      if (currentIndex < token.start) {
        result.push(text.slice(currentIndex, token.start));
      }
  
      result.push({
        type: "token",
        id: token.id,
        label: token.label,
      });
  
      currentIndex = token.end;
    }
  
    if (currentIndex < text.length) {
      result.push(text.slice(currentIndex));
    }
  
    return result;
  }
  
  /**
   * Removes full token if caret hits inside the token range on backspace.
   */
  export function detectTokenDeletion(caretPos, tokens) {
    if (!tokens || tokens.length === 0) return null;
  
    for (const token of tokens) {
      if (caretPos === token.end) {
        return token;
      }
    }
    return null;
  }
  