const ExpandedTile = ({color, onClick}) =>{

    return <div onClick={onClick} style = {{
        backgroundColor: color,
        flex: 1,
    }}></div>;
}


export default ExpandedTile;