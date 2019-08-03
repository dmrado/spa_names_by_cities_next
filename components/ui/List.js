export default (props) => {
    let items = props.items//здесь в items уже только выбранные элементы массива items типа 'veg' или 'fruits' или 'all'
    return(
        <>
            {items.map( (item) => (
                    <div className="good" key={item.id}>
                        {item.id}: {item.title}
                    </div>
                )
            )}
        </>
    )
}