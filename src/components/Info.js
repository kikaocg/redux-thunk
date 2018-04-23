import React, {Component} from 'react'
import {connect} from 'react-redux'

import {loadIP} from '../redux/actions/ip'

class Info extends Component {
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
            <span>Info: {this.props.data.origin}</span>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.ip.isFetching,
        data: state.ip.data,
        error: state.ip.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadData: () => dispatch(loadIP())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Info)