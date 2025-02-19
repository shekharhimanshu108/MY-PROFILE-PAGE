import profilepic from'./assets/shekhar.jpg'

function Card(){

    return(
        
             <div className="Card">
                <img className='dp' src={profilepic} alt="profile picture" />
                <h2>Hey there, this is Himanshu Shekhar</h2>
                <p>I am a no one and everyone at the same time</p>
             </div>

    );

}

export default Card