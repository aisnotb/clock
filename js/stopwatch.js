function Stopwatch(element){
    var time = 0;
    var interval;
    var offset;

    this.isOn = false;

    function update(){
        if (this.isOn) {
            var timepassed = delta();
            time += timepassed;
        }
        var formattedTime = timeFormatter(time);
        element.textContent = formattedTime;
    }

    function delta(){
        var now = Date.now();
        var timepassed = now - offset;
        offset = now;
        return timepassed;
    }

    function timeFormatter(timeInMillseconds){
        var time = new Date(timeInMillseconds);
        var minutes = time.getMinutes().toString();
        var seconds = time.getSeconds().toString();
        var millseconds = time.getMilliseconds().toString();

        if (minutes.length < 2) {
            minutes = '0' + minutes;
        }

        if (seconds.length < 2) {
            seconds = '0' + seconds;
        }

        while (millseconds.length < 3) {    
            millseconds = '0' + millseconds;
        }

        return minutes + " : " + seconds + " : " + millseconds;
    }

    this.start = function(){
        if(!this.isOn){
            interval = setInterval(update.bind(this), 100);
            offset = Date.now();
            this.isOn = true;
        }
    };
    this.stop = function(){
        if(this.isOn){
            clearInterval(interval);
            interval = null;
            this.isOn = false;
        }
    };
    this.reset = function(){
        time = 0;
        update();
    };
}
