import React, {Component} from 'react';
import Chart from 'react-apexcharts';
import {allData, newTimesArray, newSpeedArray, newFrequencyArray, secondSpeed, thirdSpeed, secondFrequency,thirdFrequency} from "../mydata";

class Data extends Component {
constructor(props) {
    super(props);
    this.state = {
        options:{}
      
		}
		
}

componentWillMount(){
	this.options();
}

options() {
this.setState({
	options: {
		chart: {
				background: '#f4f4f4',
						foreColor: '#333'
		},
		xaxis: {
				categories: 
					newTimesArray,
					title: {
						text: 'Time',
						style:{
							fontSize:"25px"
						}
				}
				
		},
		plotOptions: {
				bar: {
					horizontal: false
				}
		},
		fill: {
			colors: ["#F44336"]
		},
		dataLabels: {
			enabled: true
		},
	
		title: {
			text: "Time and Frequency",
			// text2: "Time and Speed",
			align: "center",
			margin: 20,
			offsetY: 20,
			style: {
				fontSize: "25px"
			}
		},
		// title2: {
		//   text: "Time and Speed",
		//   align: "center",
		//   margin: 20,
		//   offsetY: 30,
		//   style: {
		//     fontSize: "25px"
		//   }
		// }
},
series: [{
				name: 'Frequency',
				data: newFrequencyArray,
				title: {
					text: 'Time',
					style:{
						fontSize:"25px"
					}
			}
}],


firstSpeed: [{name: 'Speed', data: newSpeedArray }],
secondFrequency: [{name: 'Frequency', data: secondFrequency}],
secondSpeed: [{name: 'Speed', data: secondSpeed}],
thirdFrequency: [{name: 'Frequency', data: thirdFrequency}],
thirdSpeed: [{name: 'Speed', data: thirdSpeed}]





})

}

render() {
  
      return (<div>
				<Chart className="chart1"
      options = {this.state.options}
      series={this.state.series}
      type="line"
      height="450"
      width="40%"
      
			/>
			 <Chart 
      options = {this.state.options}
      series={this.state.firstSpeed}
      type="line"
      height="450"
      width="40%"
      
     
      
			/>
      <Chart 
      options = {this.state.options}
      series={this.state.secondFrequency}
      type="line"
      height="450"
      width="40%"
			/>

      <Chart 
      options = {this.state.options}
      series={this.state.secondSpeed}
      type="line"
      height="450"
      width="40%"
			/>

      <Chart 
      options = {this.state.options}
      series={this.state.thirdFrequency}
      type="line"
      height="450"
      width="40%"
			/>  

      <Chart 
      options = {this.state.options}
      series={this.state.thirdSpeed}
      type="line"
      height="450"
      width="40%"
			/>  
			</div>)
}
}



export default Data;