import {createContext, useContext} from 'react'

const ContextWrapper = createContext();

function ContextApi() {
    const value = 10;
    return (
        <div><h1 style={{lineHeight: "3", textDecoration: "underline"}}>Prop Drilling Solution: Context Api</h1>
            <ContextWrapper.Provider value={value}>
                <GrandParent></GrandParent>
            </ContextWrapper.Provider>
        </div>
    )
}

function GrandParent() {
    return <div>
        <p style={{fontSize: "40px"}}>Grand Parent</p>
        <Parent></Parent>
    </div>
}

function Parent() {
    return <div>
        <p style={{fontSize: "40px"}}>Parent</p>
        <Child></Child>
    </div>
}

function Child() {
    const value = useContext(ContextWrapper);
    return <div>
        <p style={{fontSize: "40px"}}>Child</p>
        <p style={{fontSize: "40px"}}>Value: {value}</p>
    </div>
}


export default ContextApi