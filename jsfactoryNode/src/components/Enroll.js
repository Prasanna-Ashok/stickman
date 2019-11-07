import React from 'react';
import '../styles/enroll.css';
import {connect} from 'react-redux';
import queryString from 'query-string';
import {enrollCourseThunk} from '../actions/enrollCourse';

class Enroll extends React.Component{
    componentDidMount(){
        let parsed = queryString.parse(this.props.location.search);
        console.log(parsed.type);
        this.props.dispatch(enrollCourseThunk(parsed.type));
    }
    render(){
        if(this.props.enrollCourseReducer.data){
        return(
            <div className = "enroll_div">
            <h3 className='enroll_h3'>Course Type: {this.props.enrollCourseReducer.data.courseType}</h3>
            <h3 className='enroll_h3_rem'>Available seats: {this.props.enrollCourseReducer.data.seatsAvailable}</h3>
            <h3 className='enroll_h3_rem'>Start Date: {this.props.enrollCourseReducer.data.courseStartDate}</h3>
            <h3 className='enroll_h3_rem'>Fees: {this.props.enrollCourseReducer.data.totalFees}</h3>
            <h3 className='enroll_h3_rem'>Reservation Fee: {this.props.enrollCourseReducer.data.reservationFees}</h3>
            <button className = "enroll_button"> Confirm </button>
            </div> );
            }
            else{
                return (<h3>Loading</h3>);
            }
    }
}

const mapStateToProps = (state) =>{
    return state;
}

export default connect(mapStateToProps)(Enroll);