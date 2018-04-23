import React, {Component} from 'react'
import {connect} from 'react-redux'

import actions from '../redux/actions/ua'

class UserAgent extends Component {
    componentDidMount () {
        this.props.loadData()
    }
    render () {
        if (this.props.isFetching) {
            return <span>Loading...</span>
        } else if (this.props.error) {
            return <span>Erro: Não foi possível executar a requisição</span>
        }
        return(
            <span>User agent: {this.props.data['user-agent']}</span>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.ua.isFetching,
        data: state.ua.data,
        error: state.ua.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadData: () => dispatch(actions.loadUA())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserAgent)