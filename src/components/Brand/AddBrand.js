import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";
import axios from 'axios';
import swal from 'sweetalert';


class AddBrand extends Component {
    state = {
        name_brand: '',
        desc_brand: '',
        error_list: [],

    }
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    saveBrand = async (e) => {
        e.preventDefault();
        const res = await axios.post('http://localhost:8000/api/add-brand', this.state);
        if (res.data.status === 200) {
            // console.log(res.data.message);
            swal({
                title: "Add success!",
                text: res.data.message,
                icon: "success",
                button: "OK!",
            });
            this.props.history.push('/brand');
            this.setState({
                name_brand: '',
                desc_brand: '',
            });
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
                    <h2 className="bg-primary text-light shadow p-3">Create Brand
                        <Link to={'/'} className="btn btn-danger btn-sm float-end m-1">Home</Link>
                        <Link to={'/brand'} className="btn btn-success btn-sm float-end m-1">Brand data</Link>


                    </h2>

                    <div className=" mt-3 mb-3">
                        <form className="form" onSubmit={this.saveBrand}>
                            <div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Brand name</label>
                                    <input type="text" onChange={this.handleInput} value={this.state.name_brand} className="form-control" name="name_brand" id="" placeholder="name" />
                                    <span className="text-danger">{this.state.error_list.name_brand}</span>

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Description </label>
                                    <textarea onChange={this.handleInput} name="desc_brand" className="form-control" id="text_desc" rows={3} defaultValue={this.state.desc_brand} />
                                    <span className="text-danger">{this.state.error_list.desc_brand}</span>

                                </div>
                                <button className="btn btn-outline-primary " type="submit">Add Brand</button>

                            </div>
                        </form>
                    </div>

                </div>
            </div>
        );
    }
}

export default AddBrand;