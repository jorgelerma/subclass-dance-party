var Dancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');

  this._timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(top, left);

}

  //var dancer = {};
  //this.dancers = {};
  //this.top = top;
  //this.left = left;


  // use jQuery to create an HTML <span> tag
  //dancer.$node = $('<span class="dancer"></span>');


  //dancer.step = function() {
    //this.step = function() {
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    //setTimeout(dancer.step, timeBetweenSteps);
  //};
  //this.step();


//};   // NEW CLOSING BRACKET


  Dancer.prototype.step = function(){
  //Dancer.prototype.step = function(){
    //setTimeout(Dancer.step, this._timeBetweenSteps);
    //setTimeout(this.step, this._timeBetweenSteps);
    //setTimeout(this.step.bind(this), this._timeBetweenSteps);
  };
  //dancer.step();

  Dancer.prototype.setPosition = function(top, left) {
    //dancer.setPosition = function(top, left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    var styleSettings = {
      top: top,
      left: left
    };
    //dancer.$node.css(styleSettings);
    //Dancer.$node.css(styleSettings);
    this.$node.css(styleSettings);
  };

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  //dancer.setPosition(top, left);

  // COMMENTED OUT
  //Dancer.prototype.setPosition(top, left);
  //return dancer;
//};
