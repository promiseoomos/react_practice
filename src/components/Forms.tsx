import { ChangeEvent, DetailedHTMLProps, FormEvent } from "react";
import { useState } from "react";

export interface Data {
    fname: string,
    lname: string,
    email: string,
    gender: string,
    password: string,
    agreement: boolean
}

const Forms = () => {
    const [data, setData] = useState<Data>({
        fname: "",
        lname: "",
        email: "",
        gender: "",
        password: "",
        agreement : false
    })

    const handleChange = (event : ChangeEvent<HTMLInputElement | HTMLFormElement>) => {

        if(event.target.type == 'checkbox'){
            setData((oldData) => (
                {...oldData, [event.target.name]: event.target.checked}
            ))    
        }else{
            setData((oldData) => (
                {...oldData, [event.target.name]: event.target.value}
            ))
        }
    }

    const sendForm = (event : FormEvent) => {
        event.preventDefault()
        console.log(data)
    }

    return (
        <div>
            <form onSubmit={sendForm}>
                {/* <p>{data}</p> */}
                <div>
                    <p>First Name</p>
                    <input type="text" name="fname" value={data.fname} onChange={handleChange} />
                </div>

                <div>
                    <p>Last Name</p>
                    <input type="text" name="lname" value={data.lname} onChange={handleChange} />
                </div>

                <div>
                    <p>Email</p>
                    <input type="email" name="email" value={data.email} onChange={handleChange} />
                </div>

                <div>
                    <p>Gender</p>
                    <div>
                        Male <input type="radio" name="gender" value="male" onChange={handleChange} />
                    </div>
                    <div>
                        Female <input type="radio" name="gender" value="female" onChange={handleChange} />
                    </div>
                </div>

                <div>
                    <p>Password</p>
                    <input type="password" name="password" value={data.password} onChange={handleChange} />
                </div>

                <div>
                    <p>Do You agree to our Terms?</p>
                    <input type="checkbox" name="agreement" checked={data.agreement} onChange={handleChange} />
                </div>

                <div>
                    <button type="submit" value="Save">Save Details</button>
                </div>


            </form>
        </div>
    )
}

export default Forms;