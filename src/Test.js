import React from 'react';
import PropTypes from 'prop-types';
class Test extends React.Component {
    render() {
        const { content2Test } = this.props;
        return (
            <div>
                this is test component
                {content2Test}
            </div>

        )
    }
}
Test.propTypes = {
    content2Test: PropTypes.string
}
export default Test