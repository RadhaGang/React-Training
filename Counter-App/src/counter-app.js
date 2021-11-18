import React from 'react';

const DeltaButton = (props) => {
  let label = "" + props.value;
  let label1=" ";

  //if (props.delta > 0) label += " + ";
  //label += " " + props.delta;
const style={
  margin:"5px",
  width:"100px",
  height:"30px"
}

  label =props.delta;
   if (label>0)  label1="+"+label;
   
   if (label<0)  label1=label;

  const handleChange = () => {
     props.onChange(props.value + props.delta);
  };

  return (
    <button onClick={handleChange} className="delta-button">
     {label1}
    
    </button>
  );
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  render() {
    const change = (newValue) => {
      this.setState({ value: newValue });
    };
    return (
      <div className="App" style={{width:"50px"}}>
        <DeltaButton onChange={change} value={this.state.value} delta={+1}/>

        <DeltaButton onChange={change} value={this.state.value} delta={+10} />
        <DeltaButton onChange={change} value={this.state.value} delta={-1} />

        <DeltaButton onChange={change} value={this.state.value} delta={-10} />

        <button>{this.state.value}</button>

      </div>
    );
  }
}
