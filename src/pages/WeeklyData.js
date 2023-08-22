import { Component } from "react";
import store from "../store";
import { Day } from "../components";
import { v4 as uuidv4 } from 'uuid';
import styles from "../styles/week.module.css"

class WeeklyData extends Component {

    constructor() {
        super();
        this.state = {
            habits: store.getState()
        };
        this.rerenderWeekStatus = this.rerenderWeekStatus.bind(this);
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
                                <div className={styles.title}>  
                                    {habit.description}
                                    
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