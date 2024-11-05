import React from 'react';

const Contact = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '0', padding: '20px', backgroundColor: '#f9f9f9' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <h1 style={{ textAlign: 'center', color: '#333', fontSize: '2rem', marginBottom: '20px' }}>Contact Us</h1>

        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <p style={{ fontSize: '1.2rem', color: '#555' }}>
            <strong>Email:</strong> info@kiddochic.com
          </p>
          <p style={{ fontSize: '1.2rem', color: '#555' }}>
            <strong>Phone:</strong> +1 234 567 890
          </p>
          <p style={{ fontSize: '1.2rem', color: '#555' }}>
            <strong>Address:</strong> 123 Chic Street, Fashion City, USA
          </p>
        </div>

        <div style={{ textAlign: 'center' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1956.3043361614018!2d-73.82866039347999!3d40.760221023949754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c26010b99182eb%3A0xbbe31cc893bbd7fc!2s39-17%20Union%20St%2C%20Flushing%2C%20NY%2011354%2C%20USA!5e1!3m2!1sen!2sin!4v1727376187060!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: '0', maxWidth: '100%' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;

