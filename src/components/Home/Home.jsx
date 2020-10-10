import React, { Component } from 'react'
import Cards from '../Cards/Cards'
import Form from '../Form/Form'
import './_Home.scss'
import axios from 'axios';

export default class Home extends Component {

    constructor() {
        super();
        this.state = {
            showForm: false,
            cards: []
        };
    }

    componentWillMount() {
        axios.get(`http://localhost:9000/v1/notes`)
            .then(res => {
                const notes = res.data;
                this.setState({ cards: notes });
            })
    }

    componentDidUpdate() {

        axios.get(`http://localhost:9000/v1/notes`)
            .then(res => {
                const notes = res.data;
                this.setState({ cards: notes });
            })
    }

    toggleForm = () => {
        this.setState({
            showForm: !this.state.showForm
        })
    }

    render() {
        return (
            <div className="home-container">
                <button className="add-note" onClick={this.toggleForm}>Add a note</button>
                {
                    this.state.cards.length > 0
                        ?
                        <Cards cards={this.state.cards}></Cards>
                        :
                        <span className="span-no-data">No notes from you, add now !</span>
                }
                {
                    this.state.showForm && <Form toggleForm={this.toggleForm}></Form>
                }
            </div>
        )
    }
}
