export default function GoogleMap() {
  return (
    <div className="w-full h-80 rounded-lg overflow-hidden border border-dark-700">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2891.4!2d-79.7135!3d43.5803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b46e5b8a8f8e7%3A0x1234567890abcdef!2s248+Queen+St+S%2C+Mississauga%2C+ON+L5M+1L8!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Chameleon Studio Location"
      />
    </div>
  );
}
