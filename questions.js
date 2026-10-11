/* ============================================================
   SPARDHA 2K26 · Round 3 · The Final Extraction  —  SET A
   QUESTIONS, CLUES AND ANSWERS live in this file only.

   paper    – what the GRID-SIDE participant solves on paper.
              Kept here for validation only. NEVER shown on screen.
       question – paper question (reference only)
       clue     – the clue the grid-side participant calls out
                  (case-insensitive, trimmed; punctuation such as
                   "80%" or "192.168.1.0" must match exactly)

   monitor  – what the MONITOR-SIDE participant sees after the
              correct clue is entered.
       type     – "choice" (options A–E; not used in this build) or "text"
       question – question wording shown on screen
       options  – (choice) [{ key:"A", text:"..." }, ...]
       correct  – (choice) the correct option key, e.g. "B"
                  (text)   list of accepted answers
       placeholder – true while the wording is NOT yet official.
                  A visible "PLACEHOLDER" tag is shown on screen until
                  you set this to false.

   NOTE: every monitor-side question is a typed answer (no options). Case-insensitive and trimmed;
   extra accepted spellings are listed in each `correct` array. Wording of the questions was supplied by the organiser.
   ============================================================ */

(function () {
  const O = (...t) => t.map((text, i) => ({ key: 'ABCDE'[i], text }));
  const choice = (question, options, correct) => ({ type: 'choice', question, options: O(...options), correct, placeholder: false });

  window.STAGES = [
    { stage: 1, paper: { question: 'Which data structure stores key-value pairs and typically offers average O(1) lookup?', clue: 'HASH TABLE' },
      monitor: { type: 'text', question: 'Which data structure follows Last In, First Out?', correct: ['STACK'], placeholder: false } },
    { stage: 2, paper: { question: 'Which SQL keyword returns only unique rows in a query result?', clue: 'DISTINCT' },
      monitor: { type: 'text', question: 'What is the time complexity of accessing an element by index in a typical array?', correct: ['O(1)'], placeholder: false } },
    { stage: 3, paper: { question: 'Which secure protocol is commonly used for remote command-line access?', clue: 'SSH' },
      monitor: { type: 'text', question: 'Which SQL clause filters groups after GROUP BY has been applied?', correct: ['HAVING'], placeholder: false } },
    { stage: 4, paper: { question: 'Which operating-system technique moves fixed-size pages between RAM and secondary storage as needed?', clue: 'PAGING' },
      monitor: { type: 'text', question: 'In a balanced binary search tree, what is the average search time?', correct: ['O(log n)', 'O(logn)', 'O(log(n))'], placeholder: false } },
    { stage: 5, paper: { question: 'Which graph traversal explores vertices level by level using a queue?', clue: 'BFS' },
      monitor: { type: 'text', question: 'Which operating-system component selects the next ready process to run on the CPU?', correct: ['CPU SCHEDULER', 'SCHEDULER', 'PROCESS SCHEDULER'], placeholder: false } },
    { stage: 6, paper: { question: 'Which isolation anomaly occurs when the same query returns extra or missing rows after another transaction inserts or deletes matching rows?', clue: 'PHANTOM READ' },
      monitor: { type: 'text', question: 'Which consistency property requires operations to appear as if they occurred atomically in an order consistent with real time?', correct: ['LINEARIZABILITY'], placeholder: false } },
    { stage: 7, paper: { question: 'Which algorithm finds a minimum spanning tree by growing one tree and choosing the lowest-weight edge leaving it?', clue: 'PRIM' },
      monitor: { type: 'text', question: 'Which algorithm finds maximum flow by repeatedly augmenting paths in a residual graph?', correct: ['FORD-FULKERSON', 'FORD FULKERSON'], placeholder: false } },
    { stage: 8, paper: { question: 'Which impossibility theorem concerns deterministic consensus in a fully asynchronous system with one possible crash failure?', clue: 'FLP IMPOSSIBILITY' },
      monitor: { type: 'text', question: 'What is the time complexity of Floyd–Warshall for all-pairs shortest paths?', correct: ['O(V³)', 'O(V^3)', 'O(V3)'], placeholder: false } },
    { stage: 9, paper: { question: 'What technique partitions a database across multiple machines by assigning records to shards?', clue: 'SHARDING' },
      monitor: { type: 'text', question: 'In a replicated distributed system, what is a quorum?', correct: ['A REQUIRED MAJORITY OR SUFFICIENT SET OF REPLICAS', 'A REQUIRED MAJORITY OF REPLICAS', 'REQUIRED MAJORITY OR SUFFICIENT SET OF REPLICAS', 'A REQUIRED MAJORITY', 'MAJORITY'], placeholder: false } },
    { stage: 10, paper: { question: 'Which neural-network architecture uses self-attention as its central mechanism rather than recurrence?', clue: 'TRANSFORMER' },
      monitor: { type: 'text', question: 'Which class of languages is recognized by a deterministic pushdown automaton?', correct: ['DETERMINISTIC CONTEXT-FREE LANGUAGES', 'DETERMINISTIC CONTEXT FREE LANGUAGES', 'DCFL'], placeholder: false } }
  ];
})();
