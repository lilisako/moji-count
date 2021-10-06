import Vue from 'vue'
export const postLocalStorage = (str) => {
  localStorage.setItem('doc_saved_text', str)
  Vue.notify({
    title: '保存されました。',
    text: 'メモ内容がブラウザに保存されました。',
    duration: 10000,
  })
}

export const getLocalStorage = () => {
  return localStorage.getItem('doc_saved_text')
}