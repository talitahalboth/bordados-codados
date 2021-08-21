// import { anchorImages } from "../__fixtures__/coresAnchor";

export function getAverageRGB(file: string) {
  // const imgEl: any = document.getElementById('i')
  // const mapAnchor = anchorImages()
  // const imgEl = React.createElement("img", {
  //     src: mapAnchor.get("1"),
  //     // ref: image => {
  //     //   this.handleSize(image);
  //     // },
  //     // onLoad=(image)=>this.handleSize(image);
  // });
  if (!file) return { r: 0, g: 0, b: 0 }
  const blockSize = 5 // only visit every 5 pixels
  const defaultRGB = { r: 0, g: 0, b: 0 } // for non-supporting envs
  const canvas = document.createElement('canvas')
  const context = canvas.getContext?.('2d')
  let data
  let width
  let height
  let i = -4
  // let length
  const rgb = { r: 0, g: 0, b: 0 }
  let count = 0

  const imgEl = document.createElement('img')

  imgEl.src = file
  if (!context) {
    return defaultRGB
  }

  height = canvas.height =
    imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height
  width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width

  context.drawImage(imgEl, 0, 0)

  try {
    data = context.getImageData(0, 0, width, height)
  } catch (e) {
    // /* security error, img on diff domain */alert('x');
    return defaultRGB
  }

  const lengthData = data.data.Data

  while ((i += blockSize * 4) < lengthData) {
    ++count
    rgb.r += data.data[i]
    rgb.g += data.data[i + 1]
    rgb.b += data.data[i + 2]
  }

  // ~~ used to floor values
  rgb.r = ~~(rgb.r / count)
  rgb.g = ~~(rgb.g / count)
  rgb.b = ~~(rgb.b / count)

  return rgb
}
