import { useState } from "react";

export default function ContactForm() {
  // Estado de campos del formulario
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  // Estado de errores
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  // Validación en tiempo real
  const validateField = (name, value) => {
    switch (name) {
      case "nombre":
        if (!value.trim()) return "El nombre es obligatorio";
        if (value.trim().length < 3) return "Debe tener al menos 3 caracteres";
        return "";
      case "email":
        if (!value.trim()) return "El email es obligatorio";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return "Formato inválido";
        return "";
      case "asunto":
        if (!value.trim()) return "El asunto es obligatorio";
        return "";
      case "mensaje":
        if (!value.trim()) return "El mensaje es obligatorio";
        if (value.trim().length < 10) return "Debe tener al menos 10 caracteres";
        return "";
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });

    // Validación en tiempo real
    setErrors({ ...errors, [name]: validateField(name, value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar todos los campos
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Formulario válido
      setSuccessMessage("✅ Tu mensaje fue enviado con éxito.");
      setFormData({
        nombre: "",
        email: "",
        asunto: "",
        mensaje: "",
      });
    } else {
      setSuccessMessage(""); // Limpiar mensaje de éxito
    }
  };

  const handleReset = () => {
    setFormData({
      nombre: "",
      email: "",
      asunto: "",
      mensaje: "",
    });
    setErrors({});
    setSuccessMessage("");
  };

  return (
    <div className="container my-5">
      <h2 className="mb-3 text-center">Contáctanos</h2>
      <p className="text-center text-muted mb-4">
        ¿Tienes dudas? Escríbenos un mensaje.
      </p>

      <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: "600px" }}>
        {/* Nombre */}
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            className={`form-control ${errors.nombre ? "is-invalid" : formData.nombre ? "is-valid" : ""}`}
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
          {errors.nombre && <div className="invalid-feedback">{errors.nombre}</div>}
        </div>

        {/* Email */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className={`form-control ${errors.email ? "is-invalid" : formData.email ? "is-valid" : ""}`}
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>

        {/* Asunto */}
        <div className="mb-3">
          <label htmlFor="asunto" className="form-label">
            Asunto
          </label>
          <input
            type="text"
            className={`form-control ${errors.asunto ? "is-invalid" : formData.asunto ? "is-valid" : ""}`}
            id="asunto"
            name="asunto"
            value={formData.asunto}
            onChange={handleChange}
          />
          {errors.asunto && <div className="invalid-feedback">{errors.asunto}</div>}
        </div>

        {/* Mensaje */}
        <div className="mb-3">
          <label htmlFor="mensaje" className="form-label">
            Mensaje
          </label>
          <textarea
            className={`form-control ${errors.mensaje ? "is-invalid" : formData.mensaje ? "is-valid" : ""}`}
            id="mensaje"
            name="mensaje"
            rows="4"
            value={formData.mensaje}
            onChange={handleChange}
          ></textarea>
          {errors.mensaje && <div className="invalid-feedback">{errors.mensaje}</div>}
        </div>

        {/* Botones */}
        <div className="d-flex justify-content-between">
          <button type="submit" className="btn btn-primary">
            Enviar mensaje
          </button>
          <button type="button" className="btn btn-secondary" onClick={handleReset}>
            Limpiar formulario
          </button>
        </div>

        {/* Mensaje de éxito */}
        {successMessage && <div className="alert alert-success mt-3">{successMessage}</div>}

        {/* Mensaje de error global */}
        {Object.keys(errors).length > 0 && !successMessage && (
          <div className="alert alert-danger mt-3">❌ Completa los campos correctamente.</div>
        )}
      </form>
    </div>
  );
}
