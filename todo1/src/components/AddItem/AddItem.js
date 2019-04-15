import React , {Component} from 'react';
import './AddItem.css'


class AddItem extends Component {
    state = {
        plan : "",
        date : ""
    }

    handleChange = (e) => {
        this.setState ({
            [e.target.id] : e.target.value
        })
    }

    handleSubmit =(e) => {
        e.preventDefault();
        if(e.target.plan.value === '' | e.target.date.value === '') {
            return false
        } else {
            this.props.addItem(this.state);
            this.setState({
                plan : "",
                date : ""
            })
        }
    }
    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Enter your plan " id="plan" onChange={this.handleChange} value={this.state.plan}/>
                    <input type="number" placeholder="Enter time" id="date" onChange={this.handleChange} value={this.state.date} />
                    <input type="submit" value="Add" />
                </form>
            </div>
        )
    }
}


export default AddItem