import React from 'react';

class EmptyList extends React.Component {
    render() {
        return (
            <div className="list--empty">
                <img src="img/razz-berry.svg" alt="" />
                <p>Awww! We don't have the pokemon you are looking for.</p>
                <p>Till we get it for you, have this razzberry !</p>
            </div>
        );
    }
}

export default EmptyList;