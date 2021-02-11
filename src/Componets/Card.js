import './style.css';


const Card = (props) => {
    return (
        <div className={props.foodImage ? 'card' : 'nocard'} >
            <img src={props.foodImage ? props.foodImage : 'https://lh3.googleusercontent.com/proxy/YRmC1SCGAbyz3YGz-yUdj6ZSYYaOKxPZJ7hlxDx8I0AJGf26LhMfYbsuVUiFcf9LSHTfGK57gEFXlpIzWaK78azYXDWFm2zKPuvj9U6xj_CvIG12P_sV6Y4siEYeVWvgrA'} alt='image' />
            <div className='cardInfo'>
                <h2>{props.itemName}</h2>
                <p>{props.description}</p>
                {props.isVegetarian ? <img src={'http://images.sasongsmat.nu/vegetarianmark/vegetarian-mark-60.png'} /> : null}
            </div>
            <div className='star'>
                {props.featured ? <img src={'https://toppng.com/uploads/preview/mrs-webbs-star-workers-thumbs-up-star-clipart-11563003782kmt46ghevs.png'} /> : null}
                <h3>{props.price}</h3>
            </div>
        </div>
    );
}

export default Card;