import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";
import axios from 'axios';
import swal from 'sweetalert';
class AddCategory extends Component {
    state = {
        name_cate: '',
        desc_cate: '',
        error_list: [],
    }
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    saveCate = async (e) => {
        e.preventDefault();
        // console.log('saveCate');
        const res = await axios.post('http://localhost:8000/api/add-category', this.state);
        if (res.data.status === 200) {
            // console.log(res.data.message);
            swal({
                title: "Add success!",
                text: res.data.message,
                icon: "success",
                button: "OK!",
            });
            this.setState({
                name_cate: '',
                desc_cate: '',
            });
            // this.history.push('/');
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
                <div className="form-control">
                    <h2 className="bg-info text-secondary shadow p-3">Create category
                        <Link to={"/"} className="btn btn-danger btn-sm float-end m-1">Home</Link>
                        <Link to={"/category"} className="btn btn-success btn-sm float-end m-1">Category data</Link>

                    </h2>
                    <div className="mt-3 mb-3">
                        <form onSubmit={this.saveCate}>
                            <div className="">
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Category name</label>
                                    <input onChange={this.handleInput} value={this.state.name_cate} name="name_cate" type="text" className="form-control" placeholder="Name" />
                                    <span className="text-danger">{this.state.error_list.name_cate}</span>

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput2" className="form-label">Description</label>
                                    <textarea onChange={this.handleInput} defaultValue={this.state.desc_cate} name="desc_cate" className="form-control" rows={3} />
                                    <span className="text-danger">{this.state.error_list.desc_cate}</span>

                                </div>
                                <button type="submit" className="btn btn-outline-primary btn-sm">Save Category</button>
                            </div>
                        </form>
                    </div>

                </div>

            </div>
        );
    }
}

export default AddCategory;