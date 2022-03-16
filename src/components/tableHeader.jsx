import { React, Component } from 'react';

class TableHeader extends Component {
    state = {}

    render() {
        const { raiseSort, columns } = this.props
        return (
            <thead>
                <tr>
                    {columns.map(column => (
                        <th
                            key={column.path||column.key}
                            onClick={() => raiseSort(column.path)}>
                            {column.label||column.key}
                        </th>

                    ))}
                </tr>
            </thead>
        );
    }
}

export default TableHeader;
