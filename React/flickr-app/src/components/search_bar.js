import React, {Component} from 'react'



class SearchBar extends Component {
    render() {
        return(              
            <input 
                value={this.state.term}
                onChange = {
                    (event) => {
                        console.log(event.target.value)
                        this.setState({
                            term: event.target.value
                        })
                        this.props.onSearchTextChanged(event.target.value)
                    }
                }
            />
        )
    }
    constructor(props) {
        super(props)
        this.state = {term: ""}
    }

}

export default SearchBar