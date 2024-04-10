import  styles from './Card.module.css'

function Card(){

    return(
        <div className = {styles.Card}>
            <p className = {styles.Text} >Gaming accessories</p>
            <div>Top</div>
            <div>Bottom</div>
        </div>
    );

}

export default Card