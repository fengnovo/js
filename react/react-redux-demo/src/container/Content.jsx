import React, { Component } from 'react';
import { connect } from 'react-redux';

class Content extends Component {
    render() {
        return (
            <div>
                <div className="content" dangerouslySetInnerHTML={{__html: this.props.content}}></div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    // console.log(state.content.content.content);
    return {
        content: state.content.content.content
    };
};
export default connect(mapStateToProps)(Content);