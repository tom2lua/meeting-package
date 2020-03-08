import React from 'react'
import bookingImg from '../../../assets/FE-Ex1.jpg'

function BookingSummary() {
  return (
    <div className="bookingSumaryContainer">
      <div className="title">Booking Sumary</div>
      <table>
        <tbody>
          <tr>
            <th>Title</th>
            <td>Venue Luna House</td>
          </tr>
          <tr>
            <th>Date</th>
            <td>Friday, February 14, 2019 - 09:00 to 17:00</td>
          </tr>
          <tr>
            <th>Room</th>
            <td>Lounge</td>
          </tr>
          <tr>
            <th>Delegates</th>
            <td>10</td>
          </tr>
          <tr>
            <th>Price per delegate</th>
            <td>55 EUR</td>
          </tr>
          <tr>
            <th>Total price</th>
            <td>550 EUR</td>
          </tr>
        </tbody>
      </table>
      <h3 className="bookingImageText">Booking place images</h3>
      <img
        className="bookingSummaryImage"
        src={bookingImg}
        alt="Booking room"
      ></img>
    </div>
  )
}

export default BookingSummary
