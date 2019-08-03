const items = [
    {
        id: 1,
        title: "Apples",
        type: "fruits"
    },
    {
        id: 2,
        title: "Lemons",
        type: "fruits"
    },
    {
        id: 4,
        title: "Cucumbers",
        type: "veg"
    },
    {
        id: 3,
        title: "Potatoes",
        type: "veg"
    }
]

const getItems = (type) => {
    if (type === 'all') {
        return items
    }
   // return items.filter( item => (type === item.type))
    return items.filter(function(item){
        if(type === item.type){
            return true
        }
    })
}

export {getItems}