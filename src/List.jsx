import { useEffect, useState } from "react";

const List = ({ getItems }) => {
    const [items, setItems] = useState([])

    useEffect(() => {
        setItems(getItems(5))
        console.log('Updating Items');
    }, [getItems])
    return items.map(item => <p key={item}>{item}</p>);
};

export default List;
