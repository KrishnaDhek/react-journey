// const heading = React.createElement('h1', {id:"heading"}, 'Welcome to React Journey'); //createElement creates a react element has 3 args
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);


//nested elements in react

const parent = React.createElement('div', { id: "parent" }, React.createElement('div', { id: "child" }, [React.createElement('h1', {}, "Hello I'm a heading tag in a nested set"), React.createElement('h2',{}, "Hey another tag" )]));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);