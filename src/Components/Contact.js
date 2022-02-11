import React, { useState } from "react";
import { send } from "emailjs-com";
import Swal from "sweetalert2";
import "../Styles/Components/Contact.scss";

function Contact() {
  const Toast = Swal.mixin({
    customClass: {
      title: "swal-title",
    },
    background: "#34374c",
    toast: true,
    position: "top",
    showConfirmButton: false,
    timer: 2500,
    timerProgressBar: true,
  });

  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "",
    message: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();

    send(
      "service_tyoo6qp",
      "template_hzc46su",
      toSend,
      "user_II3R7MQVCcVq5PhnQ34ey"
    )
      .then((response) => {
        Toast.fire({
          icon: "success",
          title: "¡Exito. Correo enviado!",
        });
      })
      .catch((err) => {
        Toast.fire({
          icon: "error",
          title: "¡Error al enviar. Vuelve a intentarlo más tarde!",
        });
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  function componentDidMount() {
    let nameMs = document.getElementById("nombre");
    let mailMs = document.getElementById("correo");
    let textMs = document.getElementById("mensaje");

    if (!nameMs.value || !mailMs.value || !textMs.value) {
      Toast.fire({
        icon: "error",
        title: "¡Error al enviar! Revisa que hayas llenado todo los campos.",
      });
    }
  }

  return (
    <div className="contact__container" id="contact-me">
      <h2 className="title">Hablemos</h2>
      <form onSubmit={onSubmit} className="contact__form">
        <label className="contact__label">Nombre</label>
        <input
          type="text"
          name="from_name"
          id="nombre"
          required
          className="contact__input"
          value={toSend.xfrom_name}
          onChange={handleChange}
        />
        <label className="contact__label">Correo</label>
        <input
          type="email"
          name="reply_to"
          className="contact__input"
          required
          id="correo"
          value={toSend.reply_to}
          onChange={handleChange}
        />
        <label className="contact__label">Mensaje</label>
        <textarea
          type="text"
          name="message"
          rows="4"
          id="mensaje"
          required
          className="contact__input"
          value={toSend.message}
          onChange={handleChange}
        />
        <input
          className="contact__btn"
          id="submit"
          type="submit"
          value="Enviar"
          onClick={componentDidMount}
        />
      </form>
    </div>
  );
}

export default Contact;
