import React from 'react'

const Contact = () => {
    return (
        <div className="contact">
            <main>
                <h1 style={{ textAlign: "center" }}>Contact Us</h1>

                <form>
                    <div>
                        <label >Name:</label>
                        <input type="text" required placeholder='Subhash Meena' />
                    </div>
                    <div>
                        <label >Email:</label>
                        <input type="email" required placeholder='Subhaxh@gmail.com' />
                    </div>
                    <div>
                        <label >Message:</label>
                        <input type="text" required placeholder='your query' />
                    </div>
                    <button type='sumit'> Submit</button>
                </form>
            </main>
        </div>
    )
}

export default Contact