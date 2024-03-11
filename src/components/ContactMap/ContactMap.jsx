import React from 'react'

const ContactMap = () => {
    return (
        <>
            <section style={{ width: '100%', height: '500px' }}>
                <iframe
                    title="Google Maps"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13614.147684979305!2d74.27660715!3d31.454413199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1709906363565!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: '0' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </section>
        </>
    )
}

export default ContactMap