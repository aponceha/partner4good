/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { CREATE_CAUSE } from '../../utils/mutations';
import './AddCause.css';

export default function AddCause() {
    const [createCause, { err, data }] = useMutation(CREATE_CAUSE);
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: '',
        description: '',
        headquarters: '',
        contactName: '',
        contactEmail: '',
        websiteLink: '',
        category: ''
    });
    const [createError, setCreateError] = useState(false);
    const updateForm = (e) => {
        const { name, value } = e.target
        setForm({
            ...form,
            [name]: value,
        });
    };
    // This function will handle the submission.
    const createCauseFormHandler = async (e) => {
        e.preventDefault();
        console.log(form)

        try {
            const { data } = await createCause({
                variables: { name: form.name, description: form.description, headquarters: form.headquarters, contactName: form.contactName, contactEmail: form.contactEmail, websiteLink: form.websiteLink, category: form.category }
            });
            navigate("/my-cause");
        }
        catch (err) {
            setCreateError(true)
        };
    }
    // This following section will display the form that takes the input from the user.
    return (
        <div className="aboutContainer">
            <div className="mainGrid1">
                <form onSubmit={createCauseFormHandler}>
                    <h2 className="h2Name">Create my Cause</h2>
                    <div className="form-group row1">
                        <label htmlFor="name" className="formTitle">Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Organization's Name"
                            className="form-control"
                            value={form.name}
                            onChange={updateForm}
                        />
                    </div>
                    <div className="form-group row1">
                        <label htmlFor="headquarters" className="formTitle">Headquarters</label>
                        <input
                            type="text"
                            name="headquarters"
                            id="headquarters"
                            placeholder="Headquarters Address"
                            className="form-control"
                            value={form.headquarters}
                            onChange={updateForm}
                        />
                    </div>
                    <div className="form-group row1">
                        <label htmlFor="contact" className="formTitle">Contact</label>
                        <input
                            type="text"
                            name="contactName"
                            id="contactName"
                            placeholder="Contact Name"
                            className="form-control"
                            value={form.contactName}
                            onChange={updateForm}
                        />
                    </div>
                    <div className="form-group row1">
                        <label htmlFor="contactEmail" className="formTitle">Email</label>
                        <input
                            type="text"
                            name="contactEmail"
                            id="contactEmail"
                            placeholder="Contact Email"
                            className="form-control"
                            value={form.contactEmail}
                            onChange={updateForm}
                        />
                    </div>
                    <div className="form-group row1">
                        <label htmlFor="website" className="formTitle">Website</label>
                        <input
                            type="text"
                            name="websiteLink"
                            id="websiteLink"
                            placeholder="Website URL"
                            className="form-control"
                            value={form.websiteLink}
                            onChange={updateForm}
                        />
                    </div>
                    <div className="form-group row1">
                        <label htmlFor="category" className="formTitle">Category</label>
                        <div>
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="category"
                                    id="environment"
                                    value="Environment"
                                    checked={form.category === "Environment"}
                                    onChange={updateForm}
                                />
                                <label htmlFor="environment" className="form-check-label label">Environment</label>
                            </div>

                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="category"
                                    id="dei"
                                    value="Diversity, Equity, Inclusion"
                                    checked={form.category === "Diversity, Equity, Inclusion"}
                                    onChange={updateForm}
                                />
                                <label htmlFor="dei" className="form-check-label label">Diversity, Equity, Inclusion</label>
                            </div>

                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="category"
                                    id="LGBTQ"
                                    value="LGBTQ"
                                    checked={form.category === "LGBTQ"}
                                    onChange={updateForm}
                                />
                                <label htmlFor="LGBTQ" className="form-check-label label">LGBTQ</label>
                            </div>

                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="category"
                                    id="Homelessness"
                                    value="Homelessness"
                                    checked={form.category === "Homelessness"}
                                    onChange={updateForm}
                                />
                                <label htmlFor="Homelessness" className="form-check-label label">Homelessness</label>
                            </div>

                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="category"
                                    id="FoodSecurity"
                                    value="Food Security"
                                    checked={form.category === "Food Security"}
                                    onChange={updateForm}
                                />
                                <label htmlFor="FoodSecurity" className="form-check-label label">Food Security</label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row1">
                        <label htmlFor="description" className="formTitle">Description</label>
                        <textarea
                            type="text"
                            name="description"
                            id="description"
                            placeholder="Description of your organization..."
                            className="descriptionDiv "
                            value={form.description}
                            onChange={updateForm}
                        />
                    </div>
                    <div>
                        <button type="submit" className="submitButton" onClick={() => window.location.href = '/my-cause'}>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
            <button className="donateButton mx-auto"> Setup Donations Portal </button>
        </div >
    )
}