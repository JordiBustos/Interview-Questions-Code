/*
    Pattern Search

    Text: B A N A N A          Lenght = N
          0 1 2 3 4 5

    Pattern: 'NA' length = M

    Found at index 2 and 4

    Rabin-Karp Algorithm
    Instead of checking for patterns check for matches on the hash of the sub-strings

    Hash('BA') === Hash('NA') X
    Hash('NA') === Hash('NA') Y
    Then and only then checks character by character

    Requirements:
      Hash at the next shift must be efficiently computable O(1) from the current hash value and next character in text.

    Rehashing:
      hash(txt[s+1 .. s+m]) = d (hash(txt[s .. s+m-1])-txt[s]*h) + txt[s+m] mod q
      where
        hash(txt[s..s+m-1]): hash value at shift s
        hash(txt[s+1..s+m]): hash value at next shift
        d: number of characters in the alphabet
        q: prime number
        h: d^(m-1)

        Best case : O(N+M)
        Worst: O(NM) txt = 'AAAAAAAAAA' pat = 'AAA'
*/

let q = 101;
let d = 256;
let txt = "BANANA";
let pat = "NA";


const search = (pat, txt, q) => {
  let M = pat.length;
  let N = txt.length;
  let i, j;

  // Hash value for pattern
  let p = 0;

  // Hash value for txt
  let t = 0;
  let h = 1;

  // The value of h would be "pow(d, M-1)%q"
  for (i = 0; i < M - 1; i++)
    h = (h * d) % q;

  // Calculate the hash value of pattern and
  // first window of text
  for (i = 0; i < M; i++) {
    p = (d * p + pat[i].charCodeAt()) % q;
    t = (d * t + txt[i].charCodeAt()) % q;
  }

  // Slide the pattern over text one by one
  for (i = 0; i <= N - M; i++) {

    // Check the hash values of current
    // window of text and pattern. If the
    // hash values match then only
    // check for characters one by one
    if (p == t) {

      /* Check for characters one by one */
      for (j = 0; j < M; j++) {
        if (txt[i + j] != pat[j])
          break;
      }

      // if p == t and pat[0...M-1] =
      // txt[i, i+1, ...i+M-1]
      if (j == M) console.log("Pattern found at index " + i);
    }

    // Calculate hash value for next window
    // of text: Remove leading digit, add
    // trailing digit
    if (i < N - M) {
      t = (d * (t - txt[i].charCodeAt() * h) +
        txt[i + M].charCodeAt()) % q;

      // We might get negative value of t,
      // converting it to positive
      if (t < 0)
        t = (t + q);
    }
  }
}

search(pat, txt, q);
