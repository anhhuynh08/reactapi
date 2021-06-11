import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";
import axios from 'axios';
import swal from 'sweetalert';
class Category extends Component {
    state = {
        category:[],
        loading: true,
    }
    async componentDidMount() {
        const res = await axios.get('http://localhost:8000/api/category');

        if(res.data.status === 200)
        {
            // console.log(res.data.category);
            this.setState({
                category: res.data.category,
                loading: false,
            })
        }

    }
    deleteCategory= async (e,id)=> {
        const thisClickedFunda = e.currentTarget;
        thisClickedFunda.innerText ="Deleting";
        const res = await axios.delete(`http://localhost:8000/api/delete-category/${id}`);
        if(res.data.status === 200)
        {
            thisClickedFunda.closest("tr").remove();
            swal({
                title: "Deleted !",
                text: res.data.message,
                icon: "success",
                button: "OK!",
              });
        }
    }

    render() {
        var cate_HTMLTABLE ="";
        if(this.state.loading)
        {
            cate_HTMLTABLE = <tr><td colSpan="5"><h2>Loading....</h2></td></tr>
        }
        else{
            cate_HTMLTABLE = 
            this.state.category.map((item) => {
                return (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name_cate}</td>
                        <td>{item.desc_cate}</td>
                        <td>
                            <Link to={`edit-category/${item.id}`} className="btn btn-warning btn-sm">Edit</Link>
                            
                        </td>
                        <td>
                            <button type='button' onClick={(e) => this.deleteCategory(e, item.id)} className="btn btn-danger btn-sm">Delete</button>
                            {/* <button className='btn btn-danger btn-sm' type='button' onClick= {(e)=>this.deleteBrand(e , item.id)}>Delete</button> */}
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
                            <h4 className="">Category data
                                <Link to={'/'} className="btn btn-danger btn-sm float-end m-1 ">Home</Link>
                                <Link to={'/add-category'} className="btn btn-success btn-sm float-end m-1">Add Category</Link>
                            </h4>
                        </div>
                        <div className="card-body">
                            <table className="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Category name</th>
                                        <th>Description</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cate_HTMLTABLE}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Category;