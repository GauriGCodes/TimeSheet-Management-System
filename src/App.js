import './App.css';
import React from 'react';
import moment from 'moment';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: []
    }
  }

  componentDidMount() {
    this.updateDate();

  }

  updateDate() {
    let week_dates = [];
    let startOfWeek = 0;
    do {
      week_dates.push(moment().day(startOfWeek)._d);
      startOfWeek += 1;
    } while (startOfWeek < 7);

    this.setState({
      date: week_dates
    }, () => {
      console.log(this.state.date);
    })

  }




  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Time-Sheet Management System</h1>
        </header>
        <main className="container">
          <form>

            <div className="form-group col-md-6 mb-3">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input type="text" className="form-control" id="name" placeholder="John Doe" required/>
            </div>
            <div className="form-group col-md-6 mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" placeholder="name@pace.edu" required/>
            </div>
            <div className="form-group col-md-6 mb-3">
              <label htmlFor="phone" className="form-label">Contact</label>
              <input type="tel" className="form-control" id="phone" placeholder="+19196406477" required/>
            </div>


            <div className='table-design'>
            <table className="table table-hover table-bordered">
              <thead className="thead-dark">
                <tr>
                  <th scope="col" className='form-group text-style'>Date</th>
                  <th scope="col" className='form-group text-style'>Task Description</th>
                  <th scope="col" className='form-group text-style'>Time In</th>
                  <th scope="col" className='form-group text-style'>Time Out</th>
                </tr>
              </thead>
              <tbody>

                {this.state.date.length > 0 && this.state.date.map((date, index) => {
                  return (
                    <tr key={index}>
                      <td className="form-group col-md-4">
                        <input type="date" className="form-control" id="date" value={date.toISOString().slice(0, 10)} readOnly />
                      </td>
                      <td className="form-group col-md-4">
                        <input type="text" className="form-control" id="task" required/>
                      </td>
                      <td className="form-group col-md-2">
                        <input type="time" className="form-control" id="timeIn" required/>
                      </td>
                      <td className="form-group col-md-2">
                        <input type="time" className="form-control" id="timeOut" required/>
                      </td>
                    </tr>
                  )
                })}
              </tbody>

            </table>
            </div>
            <button className="btn btn-primary" type="submit">Submit</button>
          </form>

        </main>
      </div>
    );

  }

}

export default App;
