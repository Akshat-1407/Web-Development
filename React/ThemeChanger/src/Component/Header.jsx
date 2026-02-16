
import "../App.css"
import { useDarkTheme } from './ThemeContext';

function Header() {
    console.log("renderd Header");
    console.log("`````````````````````");
    return (<div
        style={{
            border: "1px solid ",
            padding: "1rem",
            margin: "1rem"
        }}>
        <div>Header</div>
        <div>⬇</div>
        <Options></Options>
        <Options></Options>
        <Options></Options>
        <div>-----------------------------</div>
    </div>)
}

function Options() {
    const {isDark} = useDarkTheme();

    return <div className={`${isDark ? "dark": "light"}`}>Options</div>
}


export default Header