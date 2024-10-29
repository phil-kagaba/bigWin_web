
const Signin = () => {
    // const handleclick = (e) => {
    //     console.log('hello world', e);
    // }
    // const handleclickagain = (name, e) => {
    //     console.log('hello ' + name, e.target);
    // }
    
    
    return (  
        
        // <div className="home">
        //     <h1>Home page</h1>
        //     <button onClick = {handleclick}>click me</button>
        //     <button onClick={(e) => {
        //         handleclickagain('scott', e);
        //     }}>click me again</button>
        // </div>
        <div className="login">
            <h1 className="h1">sign in</h1>
            <form action="">
                <div className="first">
                <label htmlFor="name">username: </label>
                <input type="text" placeholder="username" className="firstin"/>
                </div>
                <div className="second">
                <label htmlFor="password">password: </label>
                <input type="password" placeholder="************" className="secondin"/>
                </div>
                <button className="button_input">log in</button><br />
               
                <p>haven't an account? <a href="/signup">sign up</a></p>
            </form>
        </div>
    );
}
 
export default Signin;