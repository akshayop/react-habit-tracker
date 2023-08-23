import { Component } from "react";
import store from "../store";
import { Day } from "../components";
import { v4 as uuidv4 } from 'uuid';
import styles from "../styles/week.module.css"
import { removeHabit } from "../actions";
import { toast } from "react-toastify";

class WeeklyData extends Component {

    constructor() {
        super();
        this.state = {
            habits: store.getState()
        };
        this.rerenderWeekStatus = this.rerenderWeekStatus.bind(this);
    }

    handleDeleteHabit = (habit) => {
        store.dispatch(removeHabit(habit.id));
        this.rerenderWeekStatus();
        toast.success("habit removed")
    }

    rerenderWeekStatus(){
        this.setState({
            habits: store.getState()
        });
    }

    render() {
        return (
            <div className={styles.weekContainer}>
                <div className={styles.displayContainer}>
                    <ul>
                        {this.state.habits.length < 1 && (
                            <h1 className={styles.displayTitle}> Nothing to Track....</h1>   
                        )}
                        {this.state.habits.map((habit, i) => (
                            <li key={`habit-${i}`}>

                                <div className={styles.calenderContainer}>
                                    <div className={styles.calender}>
                                        <img src="https://cdn-icons-png.flaticon.com/128/10804/10804108.png" alt="calender" />
                                        <div className={styles.title}>  
                                            {habit.description}
                                            
                                        </div>
                                    </div>

                                    <button className={styles.deleteBtn} onClick={() => this.handleDeleteHabit(habit)} >Delete</button>
                                </div>

                                <div className={styles.dayContainer}>
                                    <Day
                                        key={uuidv4()}
                                        id={habit.id}
                                        weekStatus={habit.weekStatus}
                                        index={0}
                                        rerenderWeekStatus={this.rerenderWeekStatus}
                                        date={new Date(new Date().getTime()-(1*24*60*60*1000))}
                                        />

                                    <Day
                                        key={uuidv4()}
                                        id={habit.id}
                                        weekStatus={habit.weekStatus}
                                        index={1}
                                        date={new Date(new Date().getTime()-(7*24*60*60*1000))}
                                        rerenderWeekStatus={this.rerenderWeekStatus}
                                        />

                                    <Day
                                        key={uuidv4()}
                                        id={habit.id}
                                        weekStatus={habit.weekStatus}
                                        index={2}
                                        date={new Date(new Date().getTime()-(6*24*60*60*1000))}
                                        rerenderWeekStatus={this.rerenderWeekStatus}
                                        />
                                    
                                    <Day
                                        key={uuidv4()}
                                        id={habit.id}
                                        weekStatus={habit.weekStatus}
                                        index={3}
                                        date={new Date(new Date().getTime()-(5*24*60*60*1000))}
                                        rerenderWeekStatus={this.rerenderWeekStatus}
                                        />

                                    <Day
                                        key={uuidv4()}
                                        id={habit.id}
                                        weekStatus={habit.weekStatus}
                                        index={4}
                                        date={new Date(new Date().getTime()-(4*24*60*60*1000))}
                                        rerenderWeekStatus={this.rerenderWeekStatus}
                                        />

                                    <Day
                                        key={uuidv4()}
                                        id={habit.id}
                                        weekStatus={habit.weekStatus}
                                        index={5}
                                        date={new Date(new Date().getTime()-(3*24*60*60*1000))}
                                        rerenderWeekStatus={this.rerenderWeekStatus}
                                        />

                                    <Day
                                        key={uuidv4()}
                                        id={habit.id}
                                        weekStatus={habit.weekStatus}
                                        index={6}
                                        date={new Date(new Date().getTime()-(2*24*60*60*1000))}
                                        rerenderWeekStatus={this.rerenderWeekStatus}
                                        />

                                    
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    };
};

export default WeeklyData;