import * as S from './styles';

type CreditCardProps = {
  name: String,
}

const CreditCard = ({name = "Cliente Sensacional"} : CreditCardProps) => {
     // <time datetime="2038-01"></time>
return(
  <S.CreditCardStyle>
  <div className="card">  
      <div className="card__info">  
           <div className="card__logo">EAI CHEFINHO CARD</div>  
           <div className="card__chip">  
                <svg className="card__chip-lines" role="img" width="20px" height="20px" viewBox="0 0 100 100" aria-label="Chip">  
                     <g opacity="0.8">  
                          <polyline points="0,50 35,50" fill="none" stroke="#000" stroke-width="2" />  
                          <polyline points="0,20 20,20 35,35" fill="none" stroke="#000" stroke-width="2" />  
                          <polyline points="50,0 50,35" fill="none" stroke="#000" stroke-width="2" />  
                          <polyline points="65,35 80,20 100,20" fill="none" stroke="#000" stroke-width="2" />  
                          <polyline points="100,50 65,50" fill="none" stroke="#000" stroke-width="2" />  
                          <polyline points="35,35 65,35 65,65 35,65 35,35" fill="none" stroke="#000" stroke-width="2" />  
                          <polyline points="0,80 20,80 35,65" fill="none" stroke="#000" stroke-width="2" />  
                          <polyline points="50,100 50,65" fill="none" stroke="#000" stroke-width="2" />  
                          <polyline points="65,65 80,80 100,80" fill="none" stroke="#000" stroke-width="2" />  
                     </g>  
                </svg>  
                <div className="card__chip-texture"></div>  
           </div>  
           <div className="card__type">debit</div>  
           <div className="card__number">  
                <span className="card__digit-group">0000</span>  
                <span className="card__digit-group">0021</span>  
                <span className="card__digit-group">4748</span>  
                <span className="card__digit-group">3647</span>  
           </div>  
           <div className="card__valid-thru" aria-label="Valid thru">Valid
           thru</div>  
           <div className="card__exp-date">28/05</div>  
           <div className="card__name" aria-label="Dee Stroyer">{name}(EC)</div>  
           <div className="card__vendor" role="img" aria-labelledby="card-vendor">  
                <span id="card-vendor" className="card__vendor-sr">VISA</span>  
           </div>  
      </div>  
      <div className="card__texture"></div>  
 </div> 
 </S.CreditCardStyle> 
);
}
export default CreditCard;