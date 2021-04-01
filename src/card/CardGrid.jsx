import React from 'react';
import Card from './Card';

const CardGrid = (props) => {
    let data = props.data;
    console.log("data from json", data);
    let rows = [];
    for (var i = 0; i < data.length; i += 4) {
        rows.push(data.slice(i, i + 4))
    }
    console.log("Mapped row data", rows);
    let grid = rows.map((row, rowIdx) => {
        return <div key={"" + rowIdx} className="row">
            {
                row.map((column, columnIdx) => {
                    return <div key={"" + columnIdx} className="col-md-3 mb-4">
                        <Card data={column} />
                    </div>
                })
            }
        </div>
    })
    return grid;
}

export default CardGrid;