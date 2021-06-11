import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";
import axios from 'axios';
import swal from 'sweetalert';


class EditBrand extends Component {
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
    async componentDidMount() {
        const brand_id = this.props.match.params.id;
        const res = await axios.get(`http://localhost:8000/api/edit-brand/${brand_id}`);
        if (res.data.status === 200) {
            this.setState({
                name_brand: res.data.brand.name_brand,
                desc_brand: res.data.brand.desc_brand,
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
    updateBrand = async (e) => {
        e.preventDefault();
        const brand_id = this.props.match.params.id;
        const res = await axios.put(`http://localhost:8000/api/update-brand/${brand_id}`, this.state);
        if (res.data.status === 200) {
            swal({
                title: "Updated!",
                text: res.data.message,
                icon: "success",
                button: "OK!",
            });
            this.props.history.push('/brand');
        } 
        else if (res.data.status === 404) {
            swal({
                title: "Warning!",
                text: res.data.message,
                icon: "warning",
                button: "OK!",
            });
            this.props.history.push('/brand');
        } 
        else 
        {
            this.setState({
                error_list: res.data.validate_err,
            });
        }
    }
    render() {
        return (
            <div className="container">
                <div className="form-control">
                    <h2 className="bg-warning text-secondary shadow p-3">Update Brand
                        <Link to={'/brand'} className="btn btn-success btn-sm float-end m-1">Brand data</Link>

                        <Link to={'/'} className="btn btn-danger btn-sm float-end m-1">Home</Link>
                    </h2>

                    <div className=" mt-3 mb-3">
                        <form className="form" onSubmit={this.updateBrand}>
                            <div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Brand name</label>
                                    <input onChange={this.handleInput} value={this.state.name_brand} type="text" className="form-control" name="name_brand" id="" placeholder="Name" />
                                    <span className="text-danger">{this.state.error_list.name_brand}</span>
                                    {/* onChange={this.handleInput} value={this.state.name_brand}  */}

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Description </label>
                                    <textarea onChange={this.handleInput} name="desc_brand" className="form-control" id="text_desc" rows={3} value={this.state.desc_brand} />
                                    <span className="text-danger">{this.state.error_list.desc_brand}</span>

                                </div>
                                <button className="btn btn-outline-primary " type="submit">Update Brand</button>

                            </div>
                        </form>
                    </div>

                </div>
            </div>
        );
    }
}

export default EditBrand;