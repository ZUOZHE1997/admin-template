// 下载图片
function download(name, imgData) {
  // const imgData = 'base64---------' // 这里放需要下载的base64
  downloadFile(name, imgData)
}
// 下载
function downloadFile(fileName, content) {
  const aLink = document.createElement('a')
  const blob = base64ToBlob(content) // new Blob([content]);

  const evt = document.createEvent('HTMLEvents')
  evt.initEvent('click', true, true) // initEvent 不加后两个参数在FF下会报错  事件类型，是否冒泡，是否阻止浏览器的默认行为
  aLink.download = fileName
  aLink.href = URL.createObjectURL(blob)

  // aLink.dispatchEvent(evt);
  aLink.click()
}
// base64转blob
function base64ToBlob(code) {
  const parts = code.split(';base64,')
  const contentType = parts[0].split(':')[1]
  const raw = window.atob(parts[1])
  const rawLength = raw.length

  const uInt8Array = new Uint8Array(rawLength)

  for (let i = 0; i < rawLength; ++i) {
    uInt8Array[i] = raw.charCodeAt(i)
  }
  return new Blob([uInt8Array], { type: contentType })
}
export { download, base64ToBlob, downloadFile }
