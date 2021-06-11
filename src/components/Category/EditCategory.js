import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";
import axios from 'axios';
import swal from 'sweetalert';


class EditCategory extends Component {
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
    async componentDidMount() {
        const cate_id = this.props.match.params.id;
        const res = await axios.get(`http://localhost:8000/api/edit-category/${cate_id}`);
        if (res.data.status === 200) {
            this.setState({
                name_cate: res.data.cate.name_cate,
                desc_cate: res.data.cate.desc_cate,
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
    updateCate = async (e) => {
        e.preventDefault();
        const cate_id = this.props.match.params.id;
        const res = await axios.put(`http://localhost:8000/api/update-category/${cate_id}`, this.state);
        if (res.data.status === 200) {
            swal({
                title: "Updated!",
                text: res.data.message,
                icon: "success",
                button: "OK!",
            });
            this.props.history.push('/category');
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
                    <h2 className="bg-warning text-secondary shadow p-3">Update Category
                        <Link to={'/'} className="btn btn-danger btn-sm float-end m-1">Home</Link>
                        <Link to={'/category'} className="btn btn-success btn-sm float-end m-1">Category data</Link>

                        
                    </h2>

                    <div className=" mt-3 mb-3">
                        <form className="form" onSubmit={this.updateCate}>
                            <div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Category name</label>
                                    <input onChange={this.handleInput} value={this.state.name_cate} type="text" className="form-control" name="name_cate" id="" placeholder="Name" />
                                    <span className="text-danger">{this.state.error_list.name_cate}</span>
                                    {/* onChange={this.handleInput} value={this.state.name_brand}  */}

                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Description </label>
                                    <textarea onChange={this.handleInput} name="desc_cate" className="form-control" id="text_desc" rows={3} value={this.state.desc_cate} />
                                    <span className="text-danger">{this.state.error_list.desc_cate}</span>

                                </div>
                                <button className="btn btn-outline-primary " type="submit">Update Category</button>

                            </div>
                        </form>
                    </div>

                </div>
            </div>
        );
    }
}

export default EditCategory;