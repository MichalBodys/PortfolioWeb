import './Contact.scss'


const Contact = () => {
    return(
    <section id='contact' className='contact'>
        <div className='container'>
            <h2 className='contact_title'>contact me </h2>
          <div className='form_box'>
            <form className='contact_form'>
                <label htmlFor="name">name</label>
                <input type="text" id='name' placeholder='Full Name'/>

                <label htmlFor="phone">phone</label>
                <input type="tel" id='phone' placeholder='Phone number'/>

                <label htmlFor="email">e-mail</label>
                <input type="email" id='email' placeholder='E-mail' />

                <label htmlFor="msg">message</label>
                <textarea id='msg'></textarea>
                <button type='submit'>send</button>
            </form>
            <p>let's work togheter</p>
          </div>
        </div>
    </section>
    )
}

export default Contact