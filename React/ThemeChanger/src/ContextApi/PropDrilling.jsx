function PropDrilling() {
  const value = 10;
  return (
    <div><h1 style={{lineHeight: "3", textDecoration: "underline"}}>Prop Drilling Example</h1>
        <GrandParent value={value}></GrandParent>
    </div> 
  )
}

function GrandParent(props) {
    return <div>
        <p style={{fontSize: "40px"}}>Grand Parent</p>
        <Parent value={props.value}></Parent>
    </div>
}
function Parent(props) {
    return <div>
        <p style={{fontSize: "40px"}}>Parent</p>
        <Child value={props.value}></Child>
    </div>
}
function Child(props) {
    return <div>
        <p style={{fontSize: "40px"}}>Child</p>
        <p style={{fontSize: "40px"}}>Value: {props.value}</p>
    </div>
}

export default PropDrilling