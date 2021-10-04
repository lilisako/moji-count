export const postLocalStorage = (str) => {
  localStorage.setItem('doc_saved_text', str)
}

export const getLocalStorage = () => {
  return localStorage.getItem('doc_saved_text')
}