import { Component } from "react";
import store from "../store";
import { addHabit, removeHabit } from "../actions";
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
            this.setState({
                value: ""
            })
        }

        this.rerender();
    }

    handleDeleteHabit = (habit) => {
        store.dispatch(removeHabit(habit.id));
        this.rerender();
        alert("habit removed");
    }

    rerender(){
        this.setState({
            habits: store.getState()
        });
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
                        {this.state.habits.length < 1 && <h1 className={styles.displayTitle}>Nothing to Track...</h1>}
                        {this.state.habits.map((habit, index) => {
                            return (
                                <div key={index}>
                                    <li>
                                        <div className={styles.description}>
                                            <img src="https://cdn-icons-png.flaticon.com/128/9512/9512688.png" alt="descriprion" />

                                            <div>
                                                {habit.description}
                                            </div>
                                        </div>

                                        
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