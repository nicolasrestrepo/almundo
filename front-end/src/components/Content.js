import React from 'react';
import PropTypes from 'prop-types';


function Content({body}){
    return(
        <div>
            {body}
        </div>
    )
}


Content.propTypes = {
    body: PropTypes.object.isRequired,
}

export default Content;