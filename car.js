class Car {
    constructor(brand, speed) {
        this.brand = brand
        this.speed = speed
    }

    accelerate(num) {
        this.speed = this.speed + num
    }

    break(num) {
        this.speed = this.speed - num
    }
    describe() {
        console.log(`${this.brand} running at ${this.speed} Km/h`)
    }



}

let batmobile = new Car("Batmobile", 0)

batmobile.accelerate(230)
batmobile.break(100)
batmobile.describe()


class Tv {
    constructor(brand, channel, volume) {
        this.brand = brand
        this.channel = channel
        this.volume = volume
    }

    volumeUp(num) {
        this.volume += num
        this.volume > 100 ? this.volume = 100 : this.volume
    }

    volumeDown(num) {
        this.volume -= num
        this.volume <= 0 ? this.volume = 0 : this.volume
    }

    channelChange(num) {
        this.channel += num
        this.channel > 50 ? this.channel = this.channel - num : this.channel

        this.channel <= 0 ? this.channel = this.channel - num : this.channel
    }

    reset(){
        this.brand = "Samsung"
        this.channel = 1
        this.volume = 50
    }

    discribe(){
        console.log(`la tv ${this.brand} est actuellement sur le canal ${this.channel} avec le volume à ${this.volume}`)
    }
}

let SamsungTv = new Tv("Samsung", 1, 50)

    SamsungTv.volumeDown(63)
    SamsungTv.volumeUp(14)

    SamsungTv.channelChange(25)
    SamsungTv.channelChange(-11)
    SamsungTv.channelChange(-20)
    SamsungTv.reset()
    SamsungTv.channelChange(20)
    SamsungTv.volumeUp(52)
    SamsungTv.discribe()



    


