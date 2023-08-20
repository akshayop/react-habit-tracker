import { Component } from "react";
import store from "../store";
import { addHabit } from "../actions";
import styles from "../styles/page.module.css";

class Home extends Component {

    constructor() {
        super();
        this.state = {
            value: "",
            habits: store.getState()
        };
        this.rerender = this.rerender.bind(this);
    }

    handleAddHabit = (e) => {

        e.preventDefault();
        if(this.state.value <= 2) {
            alert("should contain some text")
            return;
        } else {
            const habitName = this.state.value;
            store.dispatch(addHabit(habitName));
            alert("Added Successfully");
        }

        this.rerender();
    }

    rerender(){
        this.setState({
            habits: store.getState()
        });
        console.log("rerendered");
    }

    render() {
        return (
            <div className={styles.homeContainer}>
                <div className={styles.formContainer}>
                    <input type="text" placeholder="Create New Habit...." value={this.state.value} onChange={(e) => this.setState({ value: e.target.value})} />
                    <button onClick={this.handleAddHabit} >Add Habit</button>
                </div>

                <div className={styles.displayContainer}>
                    <ul>
                        {this.state.habits.length < 1 && <h1 className={styles.displayTitle}>Nothing to Track</h1>}
                        {this.state.habits.map((habit, index) => {
                            return (
                                <div key={index}>
                                    <li>
                                        {habit.description}

                                        <button className={styles.deleteBtn} onClick={() => this.handleDeleteHabit(habit)} >Delete</button>
                                    </li>

                                </div>
                            )
                        })}
                    </ul>
                </div>

                
            </div>
        );
    };
};

export default Home;