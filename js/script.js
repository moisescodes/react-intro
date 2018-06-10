class HelloWorld extends React.Component {
    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'h1',
                null,
                '1. Hello JSX World!'
            ),
            React.createElement(
                'h1',
                null,
                '2. Hello JSX World!'
            )
        );
    }
}

ReactDOM.render(React.createElement(HelloWorld, null), document.getElementById('content'));
