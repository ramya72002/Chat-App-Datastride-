// Detect token after @ or #
export function getCurrentToken(text, caretPos) {
    let i = caretPos - 1;
  
    while (i >= 0) {
      const ch = text[i];
      if (ch === "@" || ch === "#") {
        return text.substring(i, caretPos);
      }
      if (ch === " " || ch === "\n") {
        return null; // token broke
      }
      i--;
    }
  
    return null;
  }
  