

const ListComponent = () => {
    const items = ["Orange", "Mango", "Pear", "Pawpaw"]

    return (
        <div>
            {
                items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))
            }
        </div>
    )
}

export default ListComponent;