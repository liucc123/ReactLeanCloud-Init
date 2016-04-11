import React from 'react';
import { Router, Route, Link,IndexRoute } from 'react-router'
import { App } from 'containers/App'

const About = React.createClass({
    render() {
        return <h3>About</h3>
    }
})

const Inbox = React.createClass({
    render() {
        return (
            <div>
                <h2>Inbox</h2>
                {this.props.children || "Welcome to your Inbox"}
            </div>
        )
    }
})

const Message = React.createClass({
    render() {
        return <h3>Message {this.props.params.id}</h3>
    }
})

const Dashboard = React.createClass({
    render() {
        return <div>Welcome to the app!</div>
    }
})

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Dashboard} />
        <Route path="about" component={About} />
        <Route path="inbox" component={Inbox}>
            <Route path="/messages/:id" component={Message} />
        </Route>
    </Route>
);