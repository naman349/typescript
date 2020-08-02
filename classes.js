var Booking = /** @class */ (function () {
    function Booking(price, ticketsBooked) {
        this.ticketPrice = price;
        this.numberOfTickets = ticketsBooked;
    }
    Booking.prototype.calculateAmount = function () {
        return this.ticketPrice * this.numberOfTickets;
    };
    return Booking;
}());
var ticketOne = new Booking(450, 3);
console.log(ticketOne.calculateAmount());
