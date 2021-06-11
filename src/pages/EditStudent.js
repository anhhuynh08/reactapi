import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

class EditStudent extends Component {
    state = {
        name: '',
        course: '',
        email: '',
        phone: '',
        message: '',
        error_list: [],
    }
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    async componentDidMount() {
        const stud_id = this.props.match.params.id;
        const res = await axios.get(`http://localhost:8000/api/edit-student/${stud_id}`);
        if (res.data.status === 200) {
            this.setState({
                name: res.data.student.name,
                course: res.data.student.course,
                email: res.data.student.email,
                phone: res.data.student.phone,
            });
        }
        else if (res.data.status === 404) {
            swal({
                title: "Warning!",
                text: res.data.message,
                icon: "warning",
                button: "OK!",
            });
            this.props.history.push('/');
        }

    }

    updateStudent = async (e) => {
        e.preventDefault();
        const stud_id = this.props.match.params.id;
        const res = await axios.put(`http://localhost:8000/api/update-student/${stud_id}`, this.state);
        if (res.data.status === 200) { 
            // console.log(res.data.message);
            swal({
                title: "Updated!",
                text: res.data.message,
                icon: "success",
                button: "OK!",
            });
            // document.getElementById('updatebtn').disabled = false;
            // document.getElementById('updatebtn').innerHTML = "Update Student";
            this.props.history.push('/');
        }
        else if (res.data.status === 404) {
            swal({
                title: "Warning!",
                text: res.data.message,
                icon: "warning",
                button: "OK!",
            });
            this.props.history.push('/');
        }
        else {
            this.setState({
                error_list: res.data.validate_err,
            });
        }
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>
                                    Edit student
                                    <Link to={'/'} className="btn btn-primary btn-sm float-end">Go Home</Link>
                                </h4>
                            </div>
                            <div className="card-body ">
                                <form onSubmit={this.updateStudent}>
                                    <div className="form-group mb-3">
                                        <label>Student name</label>
                                        <input type="text" name="name" onChange={this.handleInput} value={this.state.name} className="form-control" />
                                        <span className="text-danger">{this.state.error_list.name}</span>

                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Student Course</label>
                                        <input type="text" name="course" onChange={this.handleInput} value={this.state.course} className="form-control" />
                                        <span className="text-danger">{this.state.error_list.course}</span>

                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Student email</label>
                                        <input type="text" name="email" onChange={this.handleInput} value={this.state.email} className="form-control" />
                                        <span className="text-danger">{this.state.error_list.email}</span>

                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Student Phone</label>
                                        <input type="text" name="phone" onChange={this.handleInput} value={this.state.phone} className="form-control" />
                                        <span className="text-danger">{this.state.error_list.phone}</span>

                                    </div>
                                    <div className="form-group mb-3">
                                        <button id="updatebtn" type="submit" className="btn btn-primary">Update Student</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditStudent;