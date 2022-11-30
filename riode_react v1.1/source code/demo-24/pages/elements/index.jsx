import React from 'react';

import ElementsList from '~/components/partials/elements/elements-list';

function ElementIndex () {
    return (
        <div className="border-top">
            <ElementsList adClass="bg-white" />
        </div>
    )
}

export default React.memo( ElementIndex );