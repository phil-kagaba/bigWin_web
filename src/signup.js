
const signup = () => {

    
    return (  
        
        
        <div className="login">
            <h1 className="h1">sign in</h1>
            <form action="">
                <div className="first">
                <label htmlFor="name">username: </label>
                <input type="text" placeholder="username" className="firstin"/>
                </div>
                <div className="firstAg">
                <label htmlFor="number">number: </label>
                <input type="number" placeholder="phone number " className="firstin"/>
                </div>
                <div className="second">
                <label htmlFor="password">password: </label>
                <input type="password" placeholder="************" className="secondin"/>
                </div>
                <button className="button_input">log up</button><br />
               
                <p>Already have an account? <a href="/signin">sign in</a></p>
            </form>
        </div>
    );
}
 
export default signup;