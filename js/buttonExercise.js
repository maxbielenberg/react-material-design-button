var ButtonExercise = React.createClass({
	render: function() {
		return (
			<div id="buttonExercise">
				<Button></Button>
				<Button></Button>
				<Button></Button>
			</div>
		);
	},
});

var Button = React.createClass({
	getInitialState: function() {
    	return {
    		animate: false //don't run an animation on load
    	};
  	},

  	getDefaultProps: function() {
    	return {
    		clickPointMaxDia: 160 //px at end of animation
    	};
  	},

  	handleMouseDown: function(){
		this.setState({animate: false}) //prep for animation by removing existing class via animate state
	},

	handleClick: function(e){
		this.setState({clickPosX: e.clientX - React.findDOMNode(this).offsetLeft}); //find x of click relative to button
		this.setState({clickPosY: e.clientY - React.findDOMNode(this).offsetTop}); // find y of click relative to button
		this.setState({animate: true}) //run the animation by adding class via animate state
	},

	render: function() {	
		var classString = ""; //used to trigger animation
		if (this.state.animate == true){
			classString = "animation"
		}

		var clickPointLocationStyle = { //used position full size clickPoint element prior to scale transforms
			top: this.state.clickPosY - (this.props.clickPointMaxDia / 2),
			left: this.state.clickPosX - (this.props.clickPointMaxDia / 2),
			width: this.props.clickPointMaxDia,
			height: this.props.clickPointMaxDia
		};

		return (
			<button className={classString} onClick={this.handleClick} onMouseDown={this.handleMouseDown}>
				<span className="clickPoint" style={clickPointLocationStyle}>
				</span>
			</button>
		);
	},
});

React.render(<ButtonExercise></ButtonExercise>, document.body);