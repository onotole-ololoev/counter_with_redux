import React from 'react';
type TablePropsType = {
    title: number
}
const Table = (props: TablePropsType) => {

    return (
        <div className={'table'}>
            {props.title}
        </div>
    );
};

export default Table;