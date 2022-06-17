import React from 'react'

import Domain from './Domain'
import InvalidFirstSort from '../../utils/InvalidFirstSort'

const DomainList = (props) => {
    if (props.domains?.length <= 0) {
        return <div />
    }

    props.domains.sort(InvalidFirstSort)

    return (
        <div>
            {props.domains?.map((domain) => (
                <Domain
                    alert={props.alert}
                    key={domain.id}
                    id={domain.id}
                    domain={domain.domain}
                    token={domain.token}
                    modules={domain.modules}
                    validated={domain.validated}
                    validate_by={domain.validate_by}
                    validate={props.validate}
                    handleValidate={props.handleValidateDomain}
                    handleReVerify={props.handleReVerify}
                    handleRequestToken={props.handleRequestToken}
                    handleDelete={props.handleDelete}
                />
            ))}
        </div>
    )
}

export default DomainList
