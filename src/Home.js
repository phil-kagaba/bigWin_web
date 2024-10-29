import { useState } from 'react';
import MenuButton from './menubutton';
const Home = () => {
    const [selectedName , setSelectedName] = useState('');
    const handleClick = () => {
      setSelectedName('barcelona');
    };

    
    return (
      
      <div className="content_section">
        
        <div>
      <MenuButton />
       </div>

        <section className="sec2">
          <div className="betsec">
             <p>3:20 pm <b>Mon30/09</b></p>
               <h1>real madrid - fc barcelona</h1>
             <div class="container">
              <div class="select" onClick={handleClick}>1 <span>29.2x</span></div>
              <div class="select">x <span>10.3x</span></div>
              <div class="select">2 <span>1.01x</span></div><a href="*">more options+</a>
             </div>
          </div> 

          <div className="betsec">
             <p>7:20 pm <b>tue31/09</b></p>
               <h1>rayon sport - arsenal</h1>
             <div class="container">
              <div class="select">1 <span>4.2x</span></div>
              <div class="select">x <span>3.2x</span></div>
              <div class="select">2 <span>2.2x</span></div><a href="*">more options+</a>
             </div>
          </div> 

          <div className="betsec">
             <p>3:00 pm <b>wed32/09</b></p>
               <h1>chelse - liverpool</h1>
             <div class="container">
              <div class="select">1 <span>9.2x</span></div>
              <div class="select">x <span>4.2x</span></div>
              <div class="select">2 <span>0.2x</span></div><a href="*">more options+</a>
             </div>
          </div> 

          <div className="betsec">
             <p>6:20 pm <b>thu33/09</b></p>
               <h1>bayer leverkusen - bayne munich</h1>
             <div class="container">
              <div class="select">1 <span>1.2x</span></div>
              <div class="select">x <span>2.2x</span></div>
              <div class="select">2 <span>3.2x</span></div><a href="*">more options+</a>
             </div>
             
          </div> 

          <div className="betsec">
             <p>5:20 pm <b>fri34/09</b></p>
               <h1>man city - man u</h1>
             <div class="container">
              <div class="select">1 <span>5.2x</span></div>
              <div class="select">x <span>9.2x</span></div>
              <div class="select">2 <span>2.2x</span></div><a href="*">more options+</a>
             </div>
          </div> 
           
           <div className="footer"><h1 className="logo">Big<b>Win</b></h1><footer>all right reserved@2024</footer></div>
        </section>
    
        <nav className="sec3">
           <div className='working'>{selectedName}</div>
           <div className="last">
           <input type="number" name="number" className="input_placebet"/>
           <button className="button_placebet">Place bet</button>
           </div> 
        </nav>
      </div>
     );
}
 
export default Home;