import React, { useState } from 'react';

import './Home.css';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

import MenuBar from '../MenuBar/MenuBar';



const Create = () => {


    const [category, setcategory] = useState('')
    const [language, setlanguage] = useState('')
    const [genre, setGenre] = useState()
    const [sort, setSort] = useState()

    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            axios.post('https://hoblist.com/api/movieList', { category, language, genre, sort }).then((response) => {
                alert("post success")
                window.location.reload(false);
            })
        } catch (e) {
            console.log(e);

        }
    }






    return (


        <>

            <MenuBar />

            <card >


                <div className="centerDiv" style={{ backgroundColor: 'white' }}>
                    <h1>Enter film Details</h1>
                    <form>
                        <label htmlFor="fname">Category</label>
                        <br />
                        <input
                            className="input"
                            type="text"
                            value={category}
                            id="fname"
                            onChange={(e) => setcategory(e.target.value)}
                            name="Name"
                            defaultValue="John"
                        />
                        <br />
                        <label htmlFor="fname">Language</label>
                        <br />
                        <input
                            className="input"
                            type="text"
                            value={language}
                            id="fname"
                            onChange={(e) => setlanguage(e.target.value)}
                            name="category"
                            defaultValue="John"
                        />
                        <br />
                        <label htmlFor="fname">Genre</label>
                        <br />


                        <input
                            className="input"
                            type="text"
                            value={genre}
                            id="fname"
                            onChange={(e) => setGenre(e.target.value)}
                            name="category"

                        />

                        <br />
                        <label htmlFor="fname">Sort</label>
                        <br />
                        <input
                            className="input"
                            type="text"
                            value={sort}
                            id="fname"
                            onChange={(e) => setSort(e.target.value)}
                            name="category"

                        />



                        <br />

                        <br />
                        <button onClick={handleSubmit} className="uploadBtn">Post Details</button>
                    </form>
                </div>

            </card>

        </>


    );
};

export default Create;
