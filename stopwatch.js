function Stopwatch(){

    let running = false;
    let startTime = NaN;
    let stopTime = NaN;
    let timeDuration = 0;

    this.start = function () {
        if(running){
            throw new Error("Stopwatch already started!!!");
        }else{
            running = true;
            startTime = new Date().getTime();
            stopTime = NaN;
            timeDuration = 0;
        }
    }
    this.stop = function () {
        if(!running){
            throw new Error("Stopwatch hasn't started yet!!!");
        }else{
            running = false;
            stopTime = new Date().getTime()
            timeDuration = stopTime - startTime;
            startTime = NaN;
            stopTime = NaN;
        }
    }
    this.reset = function () {
        if(running){
            throw new Error("Stopwatch is running!!!");
        }else{
            startTime = NaN;
            stopTime = NaN;
            timeDuration = 0;
        }
    }

    Object.defineProperty(this, 'duration', {
        get: function () {
            if(timeDuration){
                return Math.floor((timeDuration % (1000 * 60)) / 1000);
            }else{
                throw new Error("Time duration is not set yet!!!");
            }
        }
    });

}