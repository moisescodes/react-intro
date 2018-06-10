class HelloWorld extends React.Component {
    render() {
        return (
            <div>
                <h1>1. Hello JSX World!</h1>
                <h1>2. Hello JSX World!</h1>
            </div>
        )
    }
}

ReactDOM.render(
    <HelloWorld/>,
    document.getElementById('content')
)