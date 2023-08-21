import { Component } from "react";
import store from "../store";
import { updateStatus } from "../actions";

class Day extends Component {

    constructor() {
        super();

        this.handleStatus = this.handleStatus.bind(this);
        
    }

    handleStatus() {
        store.dispatch(updateStatus(this.props.id, this.props.index));
        this.props.rerenderWeekStatus();
    }

    render() {
        return (
            <div>
                <div>
                    {this.props.date.toString().split(' ')[0]}
                </div>

                <div onClick={this.handleStatus}>
                    {
                        (this.props.weekStatus[this.props.index] === "done") ? <span>Done</span> 
                        :
                        (this.props.weekStatus[this.props.index] === "not-done" && <span>Not Done</span>) ? <span>Not Done</span> : <span>empty</span>  
                    }

                    
                </div>
            </div>
        )
    }
}

export default Day;