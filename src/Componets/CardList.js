import Card from './Card';
import data from './data';

const CardList = () => {
    // function(a, b){return a - b}
    data.sort(function (a, b) {
        if (a.price > b.price) {
            return 1;
        }
        if (a.price < b.price) {
            return -1;
        }
        // a должно быть равным b
        return 0;
    });

    return (
        <div>
            {data.map((el, index) => (
                <Card {...el}
                    key={index}

                />
            ))}
        </div>
    );
}

export default CardList;

