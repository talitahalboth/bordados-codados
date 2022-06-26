interface Props {
  bgColor: string
  csx?: React.CSSProperties
}

const Circle = ({ bgColor, csx }: Props) => {
  const circleStyle = {
    padding: 10,
    margin: 20,
    display: 'inline-block',
    backgroundColor: bgColor,
    borderRadius: '50%',
    width: 100,
    height: 100,
    left: 0,
    top: 0,
  }

  const styleCsx = csx ? { ...circleStyle, ...csx } : { ...circleStyle }

  return <div style={styleCsx}></div>
}

export default Circle
