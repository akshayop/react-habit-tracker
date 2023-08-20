import { Component } from "react";
import store from "../store";
import { addHabit } from "../actions";

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
            <div >
                <div>
                    <input type="text" placeholder="Create New Habit...." value={this.state.value} onChange={(e) => this.setState({ value: e.target.value})} />
                    <button onClick={this.handleAddHabit} >Add Habit</button>
                </div>

                <div>
                    <ul>
                        {this.state.habits.length < 1 && <h1>Nothing to Track</h1>}
                        {this.state.habits.map((habit, index) => {
                            return (
                                <div key={index}>
                                    <li>
                                        <div>
                                            {habit.description}
                                        </div>

                                        <div>
                                            <button onClick={() => this.handleDeleteHabit(habit)} >Delete</button>
                                        </div>
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