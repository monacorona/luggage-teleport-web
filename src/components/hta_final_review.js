import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PassBookData } from '../actions';
import '../App.css';
import * as moment from 'moment';

class HTAFinalReview extends Component {

    constructor(props) {
        super(props);
    }

    PushData() {
        const { dispatch } = this.props;
        dispatch(PassBookData(this.props.BookData));
    }
    backToPayment = async => {
        this.PushData()
        this.props.history.push('/payment');
    }
    Submit = async => {
        console.log('final submit', this.props.BookData[0])
    }

    render() {
        console.log('final review', this.props.BookData[0])
        console.log('final review', this.props.payment)
        const { Airline, Airport, DepartureTime, Email, FlightNumber, Hotel, HotelBookingRef, NameUnderHotelRsv, 
            PhoneNumber, PickupDatetime } = this.props.BookData[0];
        const { PaymentMethod } = this.props.payment;
        return (
            <div>
                <div className="containerProgressBar" style={{ marginTop: '1em' }}>
                    <ul className="progressbar">
                        <li className="active">Booking</li>
                        <li className="active">Booking Review</li>
                        <li className="active">Payment Method</li>
                        <li>Booking/Payment Review &amp; Submit</li>
                    </ul>
                    <div className="receipt">
                        <h3>Contact Info</h3>
                        <p>Email = {Email}</p>
                        <p>Phone Number = {PhoneNumber}</p>
                        <hr />

                        <h3>Your Booking</h3>
                        <p>Hotel for Pickup = {Hotel}</p>
                        <p>Hotel Booking Reference = {HotelBookingRef}</p>
                        <p>Name under Hotel Reservation = {NameUnderHotelRsv}</p>
                        <p>Pick up Date &amp; Time = {moment(PickupDatetime).format('Do MMMM YYYY | hh:mm a')}</p>
                        <hr />

                        <p>Airport for Dropoff = {Airport}</p>
                        <p>Airline = {Airline}</p>
                        <p>Flight Number = {FlightNumber}</p>
                        <p>Departure Time = {moment(DepartureTime, ["HH:mm"]).format("hh:mm a")}</p>
                        <hr />
                        <h3>Payment Method</h3>
                        with {PaymentMethod}
                    </div>

                    <div align="center">
                        <button type="button" class="btn btn-danger btn-lg" style={{ marginRight: '3px' }} onClick={this.backToPayment}>Back</button>
                        <button type="button" class="btn btn-primary btn-lg" onClick={this.Submit}>Submit Data</button>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { BookData, payment } = state;
    return {
        BookData,
        payment
    }
}

export default connect(mapStateToProps, null)(HTAFinalReview);