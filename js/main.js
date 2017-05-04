
var timer = document.getElementById('timer');
var toggleBtn = document.getElementById('toggle');
var resetBtn = document.getElementById('reset');

var watch = new Stopwatch(timer);

function start(){
	watch.start();
	toggleBtn.textContent = 'Stop';
}

function stop(){
	watch.stop();
	toggleBtn.textContent = 'Start';
}

toggleBtn.addEventListener('click', function(){
    if (watch.isOn) {
    	stop();
    }else{
    	start();
    }
});

resetBtn.addEventListener('click', function(){
	if (!watch.isOn) {
		watch.reset();
	}
});
