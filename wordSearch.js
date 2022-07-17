/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const wordSearch = (board, word) => {
  const set = new Set()
  const ROWS = board.length
  const COLS = board[0].length

  const dfs = (r, c, i) => {
    if (word.length === i) {
      return true
    }
    if (
      r < 0 ||
      c < 0 ||
      r >= ROWS ||
      c >= COLS ||
      word[i] !== board[r][c] ||
      set.has(`${r},${c}`)
    ) {
      return false
    }

    set.add(`${r},${c}`)

    const result =
      dfs(r + 1, c, i + 1) ||
      dfs(r, c + 1, i + 1) ||
      dfs(r - 1, c, i + 1) ||
      dfs(r, c - 1, i + 1)

    set.delete(`${r},${c}`)
    return result
  }

  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      const match = dfs(i, j, 0)
      if (match) return true
    }
  }
  return false
}
