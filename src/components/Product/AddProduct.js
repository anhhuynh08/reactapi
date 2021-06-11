import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";
import axios from 'axios';
import swal from 'sweetalert';
class AddProduct extends Component {
    state = {
        name_product: '',
        category_id: '',
        brand_id: '',
        price_product: '',
        img_product: '',
        desc_product: '',
        category: [],
        brand: [],
        loading: true,
        error_list: [],

    }
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }
    async componentDidMount() {
        const res = await axios.get('http://localhost:8000/api/add-product');
        if (res.data.status === 250) {
            this.setState({
                category: res.data.category,
                brand: res.data.brand,
                loading: false,
            })
        }

    }
    saveProduct = async (e) => {
        e.preventDefault();
        // console.log('saveproduct');
        const res = await axios.post('http://localhost:8000/api/add-product', this.state);
        if (res.data.status === 200) {
            // console.log(res.data.message);
            swal({
                title: "Add success!",
                text: res.data.message,
                icon: "success",
                button: "OK!",
            });
            this.setState({
                name_product: '',
                category_id: '',
                brand_id: '',
                price_product: '',
                img_product: '',
                desc_product: '',
            })
        }
        else {
            this.setState({
                error_list: res.data.validate_err,
            });
        }
        



    }
    handleSubmitForm(event) {
        alert("Favorite Flavor: " + this.state.favoriteFlavor);
        event.preventDefault();
    }
    handleChange(event) {
        var value = event.target.value;

        this.setState({
            favoriteFlavor: value
        });
    }
    render() {
        var cate_HTML_OPTION = "";
        if (this.state.loading) {
            cate_HTML_OPTION = <option>Loading...</option>
        }
        else {
            cate_HTML_OPTION =
                this.state.category.map((item) => {
                    return (
                        <option key={item.id} onChange={this.handleInput} value={item.id}>{item.name_cate}</option>
                    );
                })
        }
        var brand_HTML_OPTION = "";
        if (this.state.loading) {
            brand_HTML_OPTION = <option>Loading...</option>
        }
        else {
            brand_HTML_OPTION =
                this.state.brand.map((item) => {
                    return (
                        <option key={item.id} onChange={this.handleInput} value={item.id}>{item.name_brand}</option>
                    );
                })
        }

        return (
            <div className="container">
                <div className="form-control">
                    <h2 className="bg-info text-secondary shadow p-3">Create product
                        <Link to={"/"} className="btn btn-danger btn-sm float-end m-1">Home</Link>
                        <Link to={"/product"} className="btn btn-success btn-sm float-end m-1">Product data</Link>

                    </h2>
                    <div className="mb-3 mt-3">
                        <form onSubmit={this.saveProduct} className="form">
                            <div className="form-group">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Product name</label>
                                <input onChange={this.handleInput} value={this.state.name_product} id="product_name" name="name_product" placeholder="product name" className="form-control" type="text" />
                                <span className="text-danger">{this.state.error_list.name_product}</span>
                            </div>
                            <div className="form-group mt-3">
                                <label className="form-label" htmlFor="product_categorie">Product category</label>
                                <select value={this.state.category_id}
                                    onChange={this.handleInput} id="product_category" name="category_id" className="form-select">
                                    <option selected>Open this select category</option>
                                    {cate_HTML_OPTION}

                                </select>
                                <span className="text-danger">{this.state.error_list.category_id}</span>
                            </div>
                            <div className="form-group mt-3">
                                <label className="form-label" htmlFor="product_brand">Product brand</label>
                                <select  value={this.state.brand_id}
                                    onChange={this.handleInput} id="product_brand" name="brand_id" className="form-select">
                                    <option selected>Open this select brand</option>
                                    {brand_HTML_OPTION}

                                </select>
                                <span className="text-danger">{this.state.error_list.brand_id}</span>
                            </div>
                            <div className="form-group mt-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Product price</label>
                                <input onChange={this.handleInput} value={this.state.price_product} id="product_price" name="price_product" placeholder="price" className="form-control" type="text" />
                                <span className="text-danger">{this.state.error_list.price_product}</span>
                            </div>
                            <div className="form-group mt-3">
                                <label className="col-md-4 form-label" htmlFor="filebutton">Product image</label>
                                <div className="">
                                    <input onChange={this.handleInput} value={this.state.img_product}  name="img_product"type="file" class="form-control-file mb-2" placeholder="" required />
                                   
                                    <span className="text-danger">{this.state.error_list.img_product}</span>
                                </div>
                            </div>
                            <div className="form-group mt-3 mb-3">
                                <label className="form-label" htmlFor="exampleFormControlInput2">Product description</label>
                                <textarea onChange={this.handleInput} value={this.state.desc_product} row={3} id="product_desc" name="desc_product" placeholder="product description" className="form-control" />
                                <span className="text-danger">{this.state.error_list.desc_product}</span>
                            </div>
                            <button type="submit" className="btn btn-outline-primary btn-sm">Save Product</button>
                        </form>
                    </div>
                </div>

            </div>
        );
    }
}

export default AddProduct;