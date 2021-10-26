import { useState } from "react";

const scaleNames = {
  a: 'Celsius',
  b: 'Fahrenheit'
};

function Changestate() {
  return (
    <>
      <Childcomponent scale="a" />
      <Childcomponent scale="b" />
    </>
  )
}

function Childcomponent(props) {
  const [value, setValue] = useState('')
  const scale = props.scale;
  return (
    <>
      <div />{scaleNames[scale]}
      <input value={value} onChange={(e) => { setValue(e.target.value) }} />
    </>
  )
}

export default Changestate;
