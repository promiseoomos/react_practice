import { ChangeEvent, useState } from "react"

export interface FormData {
    fname: string,
    lname: string,
    email: string,
    gender: string,
    password: string,
    agreement: boolean
}

const Forms2 = () => {

    const [formData, setFormData] = useState<FormData>({
        fname: "",
        lname: "",
        email: "",
        gender: "",
        password: "",
        agreement: false
    })

    const handleFormChange = (event : ChangeEvent<HTMLInputElement>) => {

        console.log(formData);

        if(event.target.type == 'checkbox'){
            setFormData((oldData) => ({...oldData, [event.target.name] : event.target.checked }))
        }else{
            setFormData((oldData) => ({...oldData, [event.target.name] : event.target.value }))
        }
    }

    return (
        <div>
            <h2>Forms of User Data</h2>
            {/* <p>{formData}</p> */}

            <div>
                <div>
                    <p>First Name:</p>
                    <input type="text" value={formData.fname} name="fname" onChange={handleFormChange} />
                </div>

                <div>
                    <p>Last Name:</p>
                    <input type="text" value={formData.lname} name="lname" onChange={handleFormChange} />
                </div>

                <div>
                    <p>Email:</p>
                    <input type="text" value={formData.email} name="email" onChange={handleFormChange} />
                </div>

                <div>
                    <p>Gender:</p>
                    Male <input type="radio" value="male" name="gender" onChange={handleFormChange} />
                    Female <input type="radio" value="female" name="gender" onChange={handleFormChange} />
                </div>

                <div>
                    <p>Password:</p>
                    <input type="password" value={formData.password} name="password" onChange={handleFormChange} />
                </div>

                <div>
                    <p>Agree to our Terms?:</p>
                    <input type="checkbox" checked={formData.agreement} name="agreement" onChange={handleFormChange} />
                </div>

                
            </div>
        </div>
    )
}

export default Forms2;