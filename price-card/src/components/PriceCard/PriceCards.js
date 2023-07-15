import './PriceCards.css';
import check from '../img/check.png';
import wrong from '../img/wrong.png';

const PriceCard = (props) =>{
    return (
        <section class="pricing">
          <div class="container">
            
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{props.plan.planName}</h5>
                <h6 className="card-price">${props.plan.price}<span class="period">/month</span></h6>
                <hr/>
                <ul className="data-ul">
                  {
                    props.plan.available.map((item, index) => {
                      return <li className={`available-${index}`}><span><img className='icon' src={check} alt=""/></span><span><b>  {item.highlighted}</b></span><span> {item.normal}</span></li>
                    })
                  }
                  {
                    props.plan.notAvailable.map((item)=>{
                      return <li className='not-available'><span><img className='icon' src={wrong} alt=""/></span>  {item}</li>
                    })
                  }
                 
                </ul>
                
               
                
                <div className="button">
                  <a href="#" className="btn">Button</a>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
    
};



export default PriceCard;