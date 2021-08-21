import { anchorToDmcColours } from '../__fixtures__/anchorToDmcColours'

export const getAnchorColourList = () => {
  const anchorToDmcColoursMap = new Map<string, string>()

  anchorToDmcColours.forEach((obj) => {
    anchorToDmcColoursMap.set(obj.anchor, obj.hex)
  })

  return anchorToDmcColoursMap
}
