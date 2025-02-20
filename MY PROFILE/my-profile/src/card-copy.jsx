import productpic from'./assets/coffee.jpg'

function Cardo(){

    return(
        
             <div className="Cardo">
                <img className='pdp' src={productpic} alt="coffee" />
                <h2 className='prohfo'>Have a sip</h2>
                <p className='descfo'>From the forests of africa, we've brought the original essence of cocoa</p>
             </div>

    );

}

export default Cardo