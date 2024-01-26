import { useEffect, useState } from "react";
const About = () => {
    const [tabName, setTabName] = useState("You are free from cold. Don't take this pill to avoid side effects.");
    const UpdateTablet = () => {
       setTabName("Welcome to cold club take this tablet citricin and cure it");
    }
    const UpdateTablet1 = () => {
        setTabName("Welcome to fever club take this tablet Dolo and cure it");
     }
     const UpdateTablet2 = () => {
        setTabName("Welcome to seizure club take this tablet Levipil regularly");
     }
    useEffect(() => {
        console.log("Side effects are Sleepy, Drowsiness");
    }, [tabName]);
    return (
        <div>
            <h1>{tabName}</h1>
            <button onClick={UpdateTablet} >Click me if you get cold</button>
            <button onClick={UpdateTablet1} >Click me if you get fever</button>
            <button onClick={UpdateTablet2} >Click me if you get epilepsy</button>
        </div>
    );
}
export default About;