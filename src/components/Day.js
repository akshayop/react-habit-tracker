import { Component } from "react";
import store from "../store";
import { updateStatus } from "../actions";
import styles from "../styles/week.module.css";
import { toast } from "react-toastify";

class Day extends Component {

    constructor() {
        super();

        this.handleStatus = this.handleStatus.bind(this);
        
    }

    handleStatus() {
        store.dispatch(updateStatus(this.props.id, this.props.index));
        toast.success("Habit updated...")
        this.props.rerenderWeekStatus();
    }

    render() {
        return (
            <div className={styles.weekWrap}>
                <div className={styles.weekDetail}>
                    {this.props.date.toString().split(' ')[0]}
                </div>

                <div className={styles.status} onClick={this.handleStatus}>
                    {
                        (this.props.weekStatus[this.props.index] === "done") ? <img src="https://cdn-icons-png.flaticon.com/128/7903/7903979.png" alt="done" />
                        :
                        (this.props.weekStatus[this.props.index] === "not-done" && <img src="https://cdn-icons-png.flaticon.com/128/1828/1828665.png" alt="not-done" />)  
                    }

                    
                </div>
            </div>
        )
    }
}

export default Day;