import '../generalStyles/generalStyles.css';
import './results.css';
import Card from '../card/card';

function Results ({list}){

    return (
        <div className="results">
            {
                list.map((i, index) => {
                   return <Card {...i} key={index}/>
                })
            }
        </div>
    )
}

export default Results;