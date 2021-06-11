import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";
import axios from 'axios';
import swal from 'sweetalert';
class Product extends Component {
    state = {
        product: [],
        category: [],
        loading: true,
    }
    async componentDidMount() {
        const res = await axios.get('http://localhost:8000/api/product');
        if (res.data.status === 200) {
            // console.log('product 200');
            this.setState({
                category: res.data.category,
                product: res.data.product,
                loading: false,
            })
        }
    }
    deleteProduct = async (e, id) => {
        const thisClickedFunda = e.currentTarget;
        thisClickedFunda.innerText = "Deleting";
        const res = await axios.delete(`http://localhost:8000/api/delete-product/${id}`);
        if (res.data.status === 200) {
            thisClickedFunda.closest("tr").remove();
            console.log(res.data.message);
            swal({
                title: "Deleted !",
                text: res.data.message,
                icon: "success",
                button: "OK!",
            });
        }
        else {
            console.log('lỗi deleteProduct');
        }

    }
    render() {
        var pro_HTMLTABLE = "";
        if (this.state.loading) {
            pro_HTMLTABLE = <tr><td colSpan="9"><h2>Loading....</h2></td></tr>
        }
        else {
            pro_HTMLTABLE =
                this.state.product.map((item) => {

                    return (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name_product}</td>
                            <td>
                                {item.category_id}
                            </td>
                            <td>
                                {item.brand_id}
                            </td>
                            <td>{item.img_product}</td>
                            <td>{item.desc_product}</td>
                            <td>{item.price_product}đ</td>
                            <td>
                                <Link to={`edit-product/${item.id}`} className="btn btn-warning btn-sm">Edit</Link>

                            </td>
                            <td>
                                <button type='button' onClick={(e) => this.deleteProduct(e, item.id)} className="btn btn-danger btn-sm">Delete</button>

                            </td>
                        </tr>
                    );
                });
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="">Product data
                                <Link to={'/'} className="btn btn-danger btn-sm float-end m-1 ">Home</Link>
                                <Link to={`add-product/`} className="btn btn-success btn-sm float-end m-1">Add product</Link>
                            </h4>
                        </div>
                        <div className="card-body">
                            <table className="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Product name</th>
                                        <th>Category name</th>
                                        <th>Brand name</th>
                                        <th>Image</th>
                                        <th>Description</th>
                                        <th>Price</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {pro_HTMLTABLE}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Product;